/**
 * [TRANSLATION UPDATE HELPER]
 * - Open a terminal in antares folder and run `npm run translation:check short-code` replacing short-code with the one you are updating.
 * - The command will output which terms are missing or not translated from english.
 * - Open antares folder with your editor of choice.
 * - Go to antares/src/renderer/i18n/ and open the locale file you want to translate.
 * - Add and translate missing terms and consider whether to translate untranslated terms.
 */

export const heIL = {
   general: { // General purpose terms
      edit: 'עריכה',
      save: 'שמירה',
      close: 'סגירה',
      delete: 'מחיקה',
      confirm: 'אישור',
      cancel: 'ביטול',
      send: 'שליחה',
      refresh: 'רענון',
      autoRefresh: 'רענון אוטומטי',
      version: 'גרסה',
      donate: 'תרומה',
      run: 'הרצה',
      results: 'תוצאות',
      size: 'גודל',
      mimeType: 'סוג MIME',
      download: 'הורדה',
      add: 'הוספה',
      data: 'נתונים',
      properties: 'מאפיינים',
      name: 'שם',
      clear: 'ניקוי',
      options: 'אפשרויות',
      insert: 'הכנסה',
      discard: 'ביטול',
      stay: 'הישאר',
      author: 'מחבר',
      upload: 'העלאה',
      browse: 'עיון',
      content: 'תוכן',
      cut: 'גזירה',
      copy: 'העתקה',
      paste: 'הדבקה',
      duplicate: 'שכפול',
      tools: 'כלים',
      seconds: 'שניות',
      all: 'הכל',
      new: 'חדש',
      select: 'בחירה',
      change: 'שינוי',
      include: 'כלול',
      includes: 'כולל',
      completed: 'הושלם',
      aborted: 'בוטל',
      disabled: 'מושבת',
      enable: 'הפעל',
      disable: 'השבת',
      contributors: 'תורמים',
      pin: 'נעץ',
      unpin: 'בטל נעיצה',
      folder: 'תיקייה | תיקיות',
      none: 'אין',
      singleQuote: 'מרכאה בודדת',
      doubleQuote: 'מרכאות כפולות',
      deleteConfirm: 'האם אתה מאשר את הביטול של',
      uploadFile: 'העלאת קובץ',
      format: 'פורמט', // Format code
      history: 'היסטוריה',
      filter: 'סינון',
      manualValue: 'ערך ידני',
      selectAll: 'בחר הכל',
      pageNumber: 'מספר עמוד',
      directoryPath: 'נתיב תיקייה',
      actionSuccessful: '{action} בוצעה בהצלחה',
      outputFormat: 'פורמט פלט',
      singleFile: 'קובץ {ext} בודד',
      zipCompressedFile: 'קובץ {ext} דחוס ב-ZIP',
      copyName: 'העתק שם',
      search: 'חיפוש',
      title: 'כותרת',
      archive: 'ארכיון', // verb
      undo: 'ביטול פעולה',
      moveTo: 'העבר אל'
   },
   connection: { // Database connection
      connection: 'חיבור',
      connectionName: 'שם החיבור',
      hostName: 'שם המארח',
      client: 'לקוח',
      port: 'פורט',
      user: 'משתמש',
      password: 'סיסמה',
      credentials: 'אישורים',
      connect: 'התחבר',
      connected: 'מחובר',
      disconnect: 'התנתק',
      disconnected: 'מנותק',
      ssl: 'SSL',
      enableSsl: 'הפעל SSL',
      privateKey: 'מפתח פרטי',
      certificate: 'תעודה',
      caCertificate: 'תעודת CA',
      ciphers: 'צפנים',
      untrustedConnection: 'חיבור לא מהימן',
      passphrase: 'ביטוי סיסמה',
      sshTunnel: 'מנהרת SSH',
      enableSsh: 'הפעל SSH',
      connectionString: 'מחרוזת חיבור',
      addConnection: 'הוסף חיבור',
      createConnection: 'צור חיבור',
      createNewConnection: 'צור חיבור חדש',
      askCredentials: 'בקש אישורים',
      testConnection: 'בדוק חיבור',
      editConnection: 'ערוך חיבור',
      deleteConnection: 'מחק חיבור',
      connectionSuccessfullyMade: 'החיבור בוצע בהצלחה!',
      readOnlyMode: 'מצב קריאה בלבד',
      allConnections: 'כל החיבורים',
      searchForConnections: 'חפש חיבורים',
      keepAliveInterval: 'מרווח שמירת חיבור',
      singleConnection: 'חיבור בודד'
   },
   database: { // Database related terms
      schema: 'סכימה',
      type: 'סוג',
      insert: 'הכנס',
      indexes: 'אינדקסים',
      foreignKeys: 'מפתחות זרים',
      length: 'אורך',
      unsigned: 'ללא סימן',
      default: 'ברירת מחדל',
      comment: 'הערה',
      key: 'מפתח | מפתחות',
      order: 'סדר',
      expression: 'ביטוי',
      autoIncrement: 'מספור אוטומטי',
      engine: 'מנוע',
      field: 'שדה | שדות',
      approximately: 'בקירוב',
      total: 'סך הכל',
      table: 'טבלה | טבלאות',
      view: 'תצוגה | תצוגות',
      materializedview: 'תצוגה ממומשת | תצוגות ממומשות',
      definer: 'מגדיר',
      algorithm: 'אלגוריתם',
      trigger: 'טריגר | טריגרים',
      storedRoutine: 'שגרה שמורה | שגרות שמורות',
      scheduler: 'מתזמן | מתזמנים',
      event: 'אירוע',
      parameters: 'פרמטרים',
      function: 'פונקציה | פונקציות',
      deterministic: 'דטרמיניסטי',
      context: 'הקשר',
      export: 'ייצוא',
      import: 'ייבוא',
      returns: 'מחזיר',
      timing: 'תזמון',
      state: 'מצב',
      execution: 'ביצוע',
      starts: 'מתחיל',
      ends: 'מסתיים',
      variables: 'משתנים',
      processes: 'תהליכים',
      database: 'מסד נתונים',
      array: 'מערך',
      structure: 'מבנה',
      row: 'שורה | שורות',
      cell: 'תא | תאים',
      triggerFunction: 'פונקציית טריגר | פונקציות טריגר',
      routine: 'שגרה | שגרות',
      drop: 'הסר',
      commit: 'בצע',
      rollback: 'שחזר',
      ddl: 'DDL',
      collation: 'אוסף',
      resultsTable: 'טבלת תוצאות',
      unableEditFieldWithoutPrimary: 'לא ניתן לערוך שדה ללא מפתח ראשי בתוצאות',
      editCell: 'ערוך תא',
      deleteRows: 'מחק שורה | מחק {count} שורות',
      confirmToDeleteRows: 'האם אתה מאשר למחוק שורה אחת? | האם אתה מאשר למחוק {count} שורות?',
      addNewRow: 'הוסף שורה חדשה',
      numberOfInserts: 'מספר הכנסות',
      affectedRows: 'שורות מושפעות',
      createNewDatabase: 'צור מסד נתונים חדש',
      databaseName: 'שם מסד הנתונים',
      serverDefault: 'ברירת מחדל של השרת',
      deleteDatabase: 'מחק מסד נתונים',
      editDatabase: 'ערוך מסד נתונים',
      clearChanges: 'נקה שינויים',
      addNewField: 'הוסף שדה חדש',
      manageIndexes: 'נהל אינדקסים',
      manageForeignKeys: 'נהל מפתחות זרים',
      allowNull: 'אפשר NULL',
      zeroFill: 'מילוי אפסים',
      customValue: 'ערך מותאם אישית',
      onUpdate: 'בעת עדכון',
      deleteField: 'מחק שדה',
      createNewIndex: 'צור אינדקס חדש',
      addToIndex: 'הוסף לאינדקס',
      createNewTable: 'צור טבלה חדשה',
      emptyTable: 'רוקן טבלה',
      duplicateTable: 'שכפל טבלה',
      deleteTable: 'מחק טבלה',
      exportTable: 'ייצא טבלה',
      emptyConfirm: 'האם אתה מאשר לרוקן',
      thereAreNoIndexes: 'אין אינדקסים',
      thereAreNoForeign: 'אין מפתחות זרים',
      createNewForeign: 'צור מפתח זר חדש',
      referenceTable: 'טבלת התייחסות',
      referenceField: 'שדה התייחסות',
      foreignFields: 'שדות זרים',
      invalidDefault: 'ברירת מחדל לא חוקית',
      onDelete: 'בעת מחיקה',
      selectStatement: 'הצהרת SELECT',
      triggerStatement: 'הצהרת טריגר',
      sqlSecurity: 'אבטחת SQL',
      updateOption: 'אפשרות עדכון',
      deleteView: 'מחק תצוגה',
      createNewView: 'צור תצוגה חדשה',
      createNewMaterializedView: 'צור תצוגה ממומשת חדשה',
      deleteTrigger: 'מחק טריגר',
      createNewTrigger: 'צור טריגר חדש',
      currentUser: 'משתמש נוכחי',
      routineBody: 'גוף השגרה',
      dataAccess: 'גישה לנתונים',
      thereAreNoParameters: 'אין פרמטרים',
      createNewParameter: 'צור פרמטר חדש',
      createNewRoutine: 'צור שגרה שמורה חדשה',
      deleteRoutine: 'מחק שגרה שמורה',
      functionBody: 'גוף הפונקציה',
      createNewFunction: 'צור פונקציה חדשה',
      deleteFunction: 'מחק פונקציה',
      schedulerBody: 'גוף המתזמן',
      createNewScheduler: 'צור מתזמן חדש',
      deleteScheduler: 'מחק מתזמן',
      preserveOnCompletion: 'שמור בסיום',
      tableFiller: 'ממלא טבלאות',
      fakeDataLanguage: 'שפת נתונים מזויפים',
      queryDuration: 'משך השאילתה',
      setNull: 'הגדר NULL',
      processesList: 'רשימת תהליכים',
      processInfo: 'מידע על תהליך',
      manageUsers: 'נהל משתמשים',
      createNewSchema: 'צור סכימה חדשה',
      schemaName: 'שם הסכימה',
      editSchema: 'ערוך סכימה',
      deleteSchema: 'מחק סכימה',
      noSchema: 'אין סכימה',
      runQuery: 'הרץ שאילתה',
      thereAreNoTableFields: 'אין שדות בטבלה',
      newTable: 'טבלה חדשה',
      newView: 'תצוגה חדשה',
      newMaterializedView: 'תצוגה ממומשת חדשה',
      newTrigger: 'טריגר חדש',
      newRoutine: 'שגרה חדשה',
      newFunction: 'פונקציה חדשה',
      newScheduler: 'מתזמן חדש',
      newTriggerFunction: 'פונקציית טריגר חדשה',
      thereAreNoQueriesYet: 'אין עדיין שאילתות',
      searchForQueries: 'חפש שאילתות',
      killProcess: 'סיים תהליך',
      exportSchema: 'ייצא סכ',
      importSchema: 'ייבא סכימה',
      newInsertStmtEvery: 'הצהרת INSERT חדשה כל',
      processingTableExport: 'מעבד {table}',
      fetchingTableExport: 'מביא נתוני {table}',
      writingTableExport: 'כותב נתוני {table}',
      checkAllTables: 'סמן את כל הטבלאות',
      uncheckAllTables: 'בטל סימון כל הטבלאות',
      killQuery: 'הרוג שאילתה',
      insertRow: 'הכנס שורה | הכנס שורות',
      commitMode: 'מצב ביצוע',
      autoCommit: 'ביצוע אוטומטי',
      manualCommit: 'ביצוע ידני',
      importQueryErrors: 'אזהרה: אירעה {n} שגיאה | אזהרה: אירעו {n} שגיאות',
      executedQueries: 'בוצעה {n} שאילתה | בוצעו {n} שאילתות',
      disableFKChecks: 'בטל בדיקות מפתח זר',
      formatQuery: 'עצב שאילתה',
      queryHistory: 'היסטוריית שאילתות',
      clearQuery: 'נקה שאילתה',
      fillCell: 'מלא תא',
      executeSelectedQuery: 'בצע שאילתה נבחרת',
      noResultsPresent: 'אין תוצאות',
      sqlExportOptions: 'אפשרויות ייצוא SQL',
      targetTable: 'טבלת יעד',
      switchDatabase: 'החלף מסד נתונים',
      searchForElements: 'חפש אלמנטים',
      searchForSchemas: 'חפש סכימות',
      savedQueries: 'שאילתות שמורות'
   },
   application: { // Application related terms
      settings: 'הגדרות',
      console: 'קונסולה',
      general: 'כללי',
      themes: 'ערכות נושא',
      update: 'עדכון',
      about: 'אודות',
      language: 'שפה',
      shortcuts: 'קיצורי דרך',
      key: 'מקש | מקשים', // Keyboard key
      event: 'אירוע',
      light: 'בהיר',
      dark: 'כהה',
      autoCompletion: 'השלמה אוטומטית',
      application: 'יישום',
      editor: 'עורך',
      changelog: 'יומן שינויים',
      small: 'קטן',
      medium: 'בינוני',
      large: 'גדול',
      appearance: 'מראה',
      color: 'צבע',
      label: 'תווית',
      icon: 'סמל',
      customIcon: 'סמל מותאם אישית',
      fileName: 'שם קובץ',
      choseFile: 'בחר קובץ',
      data: 'נתונים',
      password: 'סיסמה',
      required: 'נדרש',
      madeWithJS: 'נוצר עם 💛 ו-JavaScript!',
      checkForUpdates: 'בדוק עדכונים',
      noUpdatesAvailable: 'אין עדכונים זמינים',
      checkingForUpdate: 'בודק עדכונים',
      checkFailure: 'הבדיקה נכשלה, נסה שוב מאוחר יותר',
      updateAvailable: 'עדכון זמין',
      downloadingUpdate: 'מוריד עדכון',
      updateDownloaded: 'העדכון הורד',
      restartToInstall: 'הפעל מחדש את Antares כדי להתקין',
      includeBetaUpdates: 'כלול עדכוני בטא',
      notificationsTimeout: 'זמן התראות',
      openNewTab: 'פתח כרטיסייה חדשה',
      unsavedChanges: 'שינויים שלא נשמרו',
      discardUnsavedChanges: 'יש לך שינויים שלא נשמרו. סגירת כרטיסייה זו תגרום לאובדן השינויים.',
      applicationTheme: 'ערכת נושא ליישום',
      editorTheme: 'ערכת נושא לעורך',
      wrapLongLines: 'גלישת שורות ארוכות',
      markdownSupported: 'תמיכה ב-Markdown',
      plantATree: 'נטע עץ',
      dataTabPageSize: 'תוצאות לעמוד',
      noOpenTabs: 'אין כרטיסיות פתוחות, נווט בסרגל השמאלי או:',
      restorePreviousSession: 'שחזר הפעלה קודמת',
      closeTab: 'סגור כרטיסייה',
      goToDownloadPage: 'עבור לדף ההורדה',
      disableBlur: 'בטל טשטוש',
      missingOrIncompleteTranslation: 'תרגום חסר או לא שלם?',
      findOutHowToContribute: 'גלה כיצד לתרום',
      reportABug: 'דווח על באג',
      nextTab: 'כרטיסייה הבאה',
      previousTab: 'כרטיסייה קודמת',
      selectTabNumber: 'בחר כרטיסייה מספר {param}',
      toggleConsole: 'הצג/הסתר קונסולה',
      addShortcut: 'הוסף קיצור דרך',
      editShortcut: 'ערוך קיצור דרך',
      deleteShortcut: 'מחק קיצור דרך',
      restoreDefaults: 'שחזר ברירות מחדל',
      restoreDefaultsQuestion: 'האם אתה מאשר לשחזר את ערכי ברירת המחדל?',
      registerAShortcut: 'רשום קיצור דרך',
      invalidShortcutMessage: 'שילוב לא חוקי, המשך להקליד',
      shortcutAlreadyExists: 'קיצור הדרך כבר קיים',
      saveContent: 'שמור תוכן',
      openAllConnections: 'פתח את כל החיבורים',
      openSettings: 'פתח הגדרות',
      runOrReload: 'הרץ או טען מחדש',
      openFilter: 'פתח מסנן',
      nextResultsPage: 'עמוד תוצאות הבא',
      previousResultsPage: 'עמוד תוצאות קודם',
      editFolder: 'ערוך תיקייה',
      folderName: 'שם תיקייה',
      deleteFolder: 'מחק תיקייה',
      newFolder: 'תיקייה חדשה',
      outOfFolder: 'מחוץ לתיקייה',
      editConnectionAppearance: 'ערוך מראה חיבור',
      defaultCopyType: 'סוג העתקה ברירת מחדל',
      showTableSize: 'הצג גודל טבלה בסרגל הצד',
      showTableSizeDescription: 'MySQL/MariaDB בלבד. הפעלת אפשרות זו עלולה להשפיע על הביצועים בסכימה עם טבלאות רבות.',
      switchSearchMethod: 'החלף שיטת חיפוש',
      phpArray: 'מערך PHP',
      closeAllTabs: 'סגור את כל הכרטיסיות',
      closeOtherTabs: 'סגור כרטיסיות אחרות',
      closeTabsToLeft: 'סגור כרטיסיות משמאל',
      closeTabsToRight: 'סגור כרטיסיות מימין',
      csvFieldDelimiter: 'מפריד שדות',
      csvLinesTerminator: 'מסיים שורות',
      csvStringDelimiter: 'מפריד מחרוזות',
      csvIncludeHeader: 'כלול כותרת',
      csvExportOptions: 'אפשרויות ייצוא CSV',
      exportData: 'ייצא נתונים',
      exportDataExplanation: 'ייצא חיבורים שמורים ל-Antares. תתבקש להזין סיסמה להצפנת הקובץ המיוצא.',
      importData: 'ייבא נתונים',
      importDataExplanation: 'מייבא קובץ .antares המכיל חיבורים. תצטרך להזין את הסיסמה שהוגדרה בזמן הייצוא.',
      includeConnectionPasswords: 'כלול סיסמאות חיבור',
      includeFolders: 'כלול תיקיות',
      encryptionPassword: 'סיסמת הצפנה',
      encryptionPasswordError: 'סיסמת ההצפנה חייבת להיות באורך של 8 תווים לפחות.',
      ignoreDuplicates: 'התעלם מכפילויות',
      wrongImportPassword: 'סיסמת ייבוא שגויה',
      wrongFileFormat: 'פורמט קובץ שגוי',
      dataImportSuccess: 'הנתונים יובאו בהצלחה',
      note: 'הערה | הערות',
      thereAreNoNotesYet: 'אין עדיין הערות',
      addNote: 'הוסף הערה',
      editNote: 'ערוך הערה',
      saveAsNote: 'שמור כהערה',
      showArchivedNotes: 'הצג הערות בארכיון',
      hideArchivedNotes: 'הסתר הערות בארכיון',
      tag: 'תג', // Note tag
      saveFile: 'שמור קובץ',
      saveFileAs: 'שמור קובץ בשם',
      openFile: 'פתח קובץ',
      openNotes: 'פתח הערות',
      debugConsole: 'קונסולת ניפוי', // <- console tab name
      executedQueries: 'שאילתות שבוצעו', // <- console tab name
      sizeLimitError: 'חריגה מהגודל המקסימלי של {size}'
   },
   faker: { // Faker.js methods, used in random generated content
      address: 'כתובת',
      commerce: 'מסחר',
      company: 'חברה',
      database: 'מסד נתונים',
      date: 'תאריך',
      finance: 'פיננסים',
      git: 'Git',
      hacker: 'האקר',
      internet: 'אינטרנט',
      lorem: 'לורם',
      name: 'שם',
      music: 'מוזיקה',
      phone: 'טלפון',
      random: 'אקראי',
      system: 'מערכת',
      time: 'זמן',
      vehicle: 'רכב',
      zipCode: 'מיקוד',
      zipCodeByState: 'מיקוד לפי מדינה',
      city: 'עיר',
      cityPrefix: 'קידומת עיר',
      citySuffix: 'סיומת עיר',
      streetName: 'שם רחוב',
      streetAddress: 'כתובת רחוב',
      streetSuffix: 'סיומת רחוב',
      streetPrefix: 'קידומת רחוב',
      secondaryAddress: 'כתובת משנית',
      county: 'מחוז',
      country: 'מדינה',
      countryCode: 'קוד מדינה',
      state: 'מדינה',
      stateAbbr: 'קיצור מדינה',
      latitude: 'קו רוחב',
      longitude: 'קו אורך',
      direction: 'כיוון',
      cardinalDirection: 'כיוון קרדינלי',
      ordinalDirection: 'כיוון אורדינלי',
      nearbyGPSCoordinate: 'קואורדינטת GPS קרובה',
      timeZone: 'אזור זמן',
      color: 'צבע',
      department: 'מחלקה',
      productName: 'שם מוצר',
      price: 'מחיר',
      productAdjective: 'תואר מוצר',
      productMaterial: 'חומר מוצר',
      product: 'מוצר',
      productDescription: 'תיאור מוצר',
      suffixes: 'סיומות',
      companyName: 'שם חברה',
      companySuffix: 'סיומת חברה',
      catchPhrase: 'סיסמה',
      bs: 'BS',
      catchPhraseAdjective: 'תואר סיסמה',
      catchPhraseDescriptor: 'מתאר סיסמה',
      catchPhraseNoun: 'שם עצם סיסמה',
      bsAdjective: 'תואר BS',
      bsBuzz: 'באז BS',
      bsNoun: 'שם עצם BS',
      column: 'עמודה',
      type: 'סוג',
      collation: 'קולציה',
      engine: 'מנוע',
      past: 'עבר',
      now: 'עכשיו',

      future: 'עתיד',
      between: 'בין',
      recent: 'לאחרונה',
      soon: 'בקרוב',
      month: 'חודש',
      weekday: 'יום בשבוע',
      account: 'חשבון',
      accountName: 'שם החשבון',
      routingNumber: 'מספר ניתוב',
      mask: 'מסכה',
      amount: 'סכום',
      transactionType: 'סוג העסקה',
      currencyCode: 'קוד מטבע',
      currencyName: 'שם המטבע',
      currencySymbol: 'סמל המטבע',
      bitcoinAddress: 'כתובת ביטקוין',
      litecoinAddress: 'כתובת לייטקוין',
      creditCardNumber: 'מספר כרטיס אשראי',
      creditCardCVV: 'CVV של כרטיס אשראי',
      ethereumAddress: 'כתובת אתריום',
      iban: 'איבן',
      bic: 'BIC',
      transactionDescription: 'תיאור העסקה',
      branch: 'סניף',
      commitEntry: 'ערך קומיט',
      commitMessage: 'הודעת קומיט',
      commitSha: 'SHA של קומיט',
      shortSha: 'SHA קצר',
      abbreviation: 'קיצור',
      adjective: 'שם תואר',
      noun: 'שם עצם',
      verb: 'פועל',
      ingverb: 'פועל בצורת -ing',
      phrase: 'ביטוי',
      avatar: 'אווטאר',
      email: 'אימייל',
      exampleEmail: 'דוגמת אימייל',
      userName: 'שם משתמש',
      protocol: 'פרוטוקול',
      url: 'כתובת URL',
      domainName: 'שם דומיין',
      domainSuffix: 'סיומת דומיין',
      domainWord: 'מילת דומיין',
      ip: 'IP',
      ipv6: 'IPv6',
      userAgent: 'User Agent',
      mac: 'כתובת MAC',
      password: 'סיסמה',
      word: 'מילה',
      words: 'מילים',
      sentence: 'משפט',
      slug: 'סלאג',
      sentences: 'משפטים',
      paragraph: 'פסקה',
      paragraphs: 'פסקאות',
      text: 'טקסט',
      lines: 'שורות',
      genre: 'ז\'אנר',
      firstName: 'שם פרטי',
      lastName: 'שם משפחה',
      middleName: 'שם אמצעי',
      findName: 'שם מלא',
      jobTitle: 'תפקיד',
      gender: 'מין',
      prefix: 'תחילית',
      suffix: 'סיומת',
      title: 'כותרת',
      jobDescriptor: 'תיאור תפקיד',
      jobArea: 'תחום תפקיד',
      jobType: 'סוג תפקיד',
      phoneNumber: 'מספר טלפון',
      phoneNumberFormat: 'פורמט מספר טלפון',
      phoneFormats: 'פורמטים של מספר טלפון',
      number: 'מספר',
      float: 'מספר עשרוני',
      arrayElement: 'אלמנט במערך',
      arrayElements: 'אלמנטים במערך',
      objectElement: 'אלמנט באובייקט',
      uuid: 'UUID',
      boolean: 'בוליאני',
      image: 'תמונה',
      locale: 'לוקאל',
      alpha: 'אלפא',
      alphaNumeric: 'אלפאנומרי',
      hexaDecimal: 'הקסדצימלי',
      fileName: 'שם קובץ',
      commonFileName: 'שם קובץ נפוץ',
      mimeType: 'סוג MIME',
      commonFileType: 'סוג קובץ נפוץ',
      commonFileExt: 'סיומת קובץ נפוצה',
      fileType: 'סוג קובץ',
      fileExt: 'סיומת קובץ',
      directoryPath: 'נתיב תיקייה',
      filePath: 'נתיב קובץ',
      semver: 'גרסת Semver',
      manufacturer: 'יצרן',
      model: 'דגם',
      fuel: 'דלק',
      vin: 'מספר רכב (VIN)'
   }
};