'use strict';
import mysql from 'mysql2';
import mssql from 'mssql';

/**
 * As Simple As Possible Query Builder
 *
 * @export
 * @class AntaresConnector
 */
export class AntaresConnector {
   /**
    *Creates an instance of AntaresConnector.
    * @param {Object} args connection params
    * @memberof AntaresConnector
    */
   constructor (args) {
      this._client = args.client;
      this._params = args.params;
      this._poolSize = args.poolSize || false;
      this._connection = null;

      this._queryDefaults = {
         schema: '',
         select: [],
         from: '',
         where: [],
         groupBy: [],
         orderBy: [],
         limit: [],
         join: [],
         update: [],
         insert: [],
         delete: []
      };
      this._query = Object.assign({}, this._queryDefaults);
   }

   _reducer (acc, curr) {
      const type = typeof curr;

      switch (type) {
         case 'number':
         case 'string':
            return [...acc, curr];
         case 'object':
            if (Array.isArray(curr))
               return [...acc, ...curr];
            else {
               const clausoles = [];
               for (const key in curr)
                  clausoles.push(`${key} ${curr[key]}`);

               return clausoles;
            }
      }
   }

   _resetQuery () {
      this._query = Object.assign({}, this._queryDefaults);
   }

   /**
    * @memberof AntaresConnector
    */
   async connect () {
      switch (this._client) {
         case 'maria':
         case 'mysql':
            if (!this._poolSize) {
               const connection = mysql.createConnection(this._params);
               this._connection = connection.promise();
            }
            else {
               const pool = mysql.createPool({ ...this._params, connectionLimit: this._poolSize });
               this._connection = pool.promise();
            }
            break;
         case 'mssql': {
            const mssqlParams = {
               user: this._params.user,
               password: this._params.password,
               server: this._params.host
            };
            this._connection = await mssql.connect(mssqlParams);
         }
            break;
         default:
            break;
      }
   }

   schema (schema) {
      this._query.schema = schema;
      return this;
   }

   select (...args) {
      this._query.select = [...this._query.select, ...args];
      return this;
   }

   from (table) {
      this._query.from = table;
      return this;
   }

   where (...args) {
      this._query.where = [...this._query.where, ...args];
      return this;
   }

   groupBy (...args) {
      this._query.groupBy = [...this._query.groupBy, ...args];
      return this;
   }

   orderBy (...args) {
      this._query.orderBy = [...this._query.orderBy, ...args];
      return this;
   }

   limit (...args) {
      this._query.limit = args;
      return this;
   }

   /**
    * @returns {string} SQL string
    * @memberof AntaresConnector
    */
   getSQL () {
      const selectArray = this._query.select.reduce(this._reducer, []);
      let selectRaw;
      switch (this._client) {
         case 'maria':
         case 'mysql':
            selectRaw = selectArray.length ? `SELECT ${selectArray.join(', ')} ` : 'SELECT * ';
            break;
         case 'mssql': {
            const topRaw = this._query.limit.length ? ` TOP (${this._query.limit[0]}) ` : '';
            selectRaw = selectArray.length ? `SELECT${topRaw} ${selectArray.join(', ')} ` : 'SELECT * ';
         }
            break;
         default:
            break;
      }

      let fromRaw;
      switch (this._client) {
         case 'maria':
         case 'mysql':
            fromRaw = this._query.from ? `FROM ${this._query.schema ? `\`${this._query.schema}\`.` : ''}\`${this._query.from}\` ` : '';
            break;
         case 'mssql':
            fromRaw = this._query.from ? `FROM ${this._query.schema ? `${this._query.schema}.` : ''}${this._query.from} ` : '';
            break;
         default:
            break;
      }

      const whereArray = this._query.where.reduce(this._reducer, []);
      const whereRaw = whereArray.length ? `WHERE ${whereArray.join(' AND ')} ` : '';
      const groupByArray = this._query.groupBy.reduce(this._reducer, []);
      const groupByRaw = groupByArray.length ? `GROUP BY ${groupByArray.join(', ')} ` : '';
      const orderByArray = this._query.orderBy.reduce(this._reducer, []);
      const orderByRaw = orderByArray.length ? `ORDER BY ${orderByArray.join(', ')} ` : '';

      let limitRaw;
      switch (this._client) {
         case 'maria':
         case 'mysql':
            limitRaw = this._query.limit.length ? `LIMIT ${this._query.limit.join(', ')} ` : '';
            break;
         case 'mssql':
            limitRaw = '';
            break;
         default:
            break;
      }

      return `${selectRaw}${fromRaw}${whereRaw}${groupByRaw}${orderByRaw}${limitRaw}`;
   }

   /**
    * @returns {Promise}
    * @memberof AntaresConnector
    */
   async run () {
      const rawQuery = this.getSQL();
      if (process.env.NODE_ENV === 'development') console.log(rawQuery);
      this._resetQuery();
      return this.raw(rawQuery);
   }

   /**
    * @param {string} sql raw SQL query
    * @returns {Promise}
    * @memberof AntaresConnector
    */
   async raw (sql) {
      switch (this._client) {
         case 'maria':
         case 'mysql': {
            const [rows, fields] = await this._connection.query(sql);
            return { rows, fields };
         }
         case 'mssql': {
            const results = await this._connection.request().query(sql);
            return { rows: results.recordsets[0] };
         }
         default:
            break;
      }
   }

   /**
    * @memberof AntaresConnector
    */
   destroy () {
      switch (this._client) {
         case 'maria':
         case 'mysql':
            this._connection.end();
            break;
         case 'mssql':
            this._connection.close();
            break;
         default:
            break;
      }
   }
}
