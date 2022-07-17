/* eslint-disable @typescript-eslint/no-parameter-properties */
/* eslint-disable no-useless-constructor */
import * as _ from 'lodash';


import {IMatching, IParseResult} from "../sql/parser";
import {ICompletionItem, ICursorInfo, IStatement, ITableInfo} from "../sql/sql-parser";

export type IMonacoVersion = '0.13.2' | '0.15.6';

export type IParserType = 'mysql' | 'odps' | 'blink' | 'dsql' | 'grail' | 'emcsql';

export class DefaultOpts {
  public monacoEditorVersion: IMonacoVersion = '0.15.6';

  public parserType: IParserType = 'odps';

  public language = 'sql';

  public datasource: {[p: string]: any};

  public functionNames = ["AVG", "CHECKSUM_AGG", "COUNT", "COUNT_BIG", "GROUPING", "GROUPING_ID", "MAX", "MIN", "SUM", "STDEV", "STDEVP", "VAR", "VARP", "CUME_DIST", "FIRST_VALUE", "LAG", "LAST_VALUE", "LEAD", "PERCENTILE_CONT", "PERCENTILE_DISC", "PERCENT_RANK", "COLLATE", "COLLATIONPROPERTY", "TERTIARY_WEIGHTS", "FEDERATION_FILTERING_VALUE", "CAST", "CONVERT", "PARSE", "TRY_CAST", "TRY_CONVERT", "TRY_PARSE", "ASYMKEY_ID", "ASYMKEYPROPERTY", "CERTPROPERTY", "CERT_ID", "CRYPT_GEN_RANDOM", "DECRYPTBYASYMKEY", "DECRYPTBYCERT", "DECRYPTBYKEY", "DECRYPTBYKEYAUTOASYMKEY", "DECRYPTBYKEYAUTOCERT", "DECRYPTBYPASSPHRASE", "ENCRYPTBYASYMKEY", "ENCRYPTBYCERT", "ENCRYPTBYKEY", "ENCRYPTBYPASSPHRASE", "HASHBYTES", "IS_OBJECTSIGNED", "KEY_GUID", "KEY_ID", "KEY_NAME", "SIGNBYASYMKEY", "SIGNBYCERT", "SYMKEYPROPERTY", "VERIFYSIGNEDBYCERT", "VERIFYSIGNEDBYASYMKEY", "CURSOR_STATUS", "DATALENGTH", "IDENT_CURRENT", "IDENT_INCR", "IDENT_SEED", "IDENTITY", "SQL_VARIANT_PROPERTY", "CURRENT_TIMESTAMP", "DATEADD", "DATEDIFF", "DATEFROMPARTS", "DATENAME", "DATEPART", "DATETIME2FROMPARTS", "DATETIMEFROMPARTS", "DATETIMEOFFSETFROMPARTS", "DAY", "EOMONTH", "GETDATE", "GETUTCDATE", "ISDATE", "MONTH", "SMALLDATETIMEFROMPARTS", "SWITCHOFFSET", "SYSDATETIME", "SYSDATETIMEOFFSET", "SYSUTCDATETIME", "TIMEFROMPARTS", "TODATETIMEOFFSET", "YEAR", "CHOOSE", "COALESCE", "IIF", "NULLIF", "ABS", "ACOS", "ASIN", "ATAN", "ATN2", "CEILING", "COS", "COT", "DEGREES", "EXP", "FLOOR", "LOG", "LOG10", "PI", "POWER", "RADIANS", "RAND", "ROUND", "SIGN", "SIN", "SQRT", "SQUARE", "TAN", "APP_NAME", "APPLOCK_MODE", "APPLOCK_TEST", "ASSEMBLYPROPERTY", "COL_LENGTH", "COL_NAME", "COLUMNPROPERTY", "DATABASE_PRINCIPAL_ID", "DATABASEPROPERTYEX", "DB_ID", "DB_NAME", "FILE_ID", "FILE_IDEX", "FILE_NAME", "FILEGROUP_ID", "FILEGROUP_NAME", "FILEGROUPPROPERTY", "FILEPROPERTY", "FULLTEXTCATALOGPROPERTY", "FULLTEXTSERVICEPROPERTY", "INDEX_COL", "INDEXKEY_PROPERTY", "INDEXPROPERTY", "OBJECT_DEFINITION", "OBJECT_ID", "OBJECT_NAME", "OBJECT_SCHEMA_NAME", "OBJECTPROPERTY", "OBJECTPROPERTYEX", "ORIGINAL_DB_NAME", "PARSENAME", "SCHEMA_ID", "SCHEMA_NAME", "SCOPE_IDENTITY", "SERVERPROPERTY", "STATS_DATE", "TYPE_ID", "TYPE_NAME", "TYPEPROPERTY", "DENSE_RANK", "NTILE", "RANK", "ROW_NUMBER", "PUBLISHINGSERVERNAME", "OPENDATASOURCE", "OPENQUERY", "OPENROWSET", "OPENXML", "CERTENCODED", "CERTPRIVATEKEY", "CURRENT_USER", "HAS_DBACCESS", "HAS_PERMS_BY_NAME", "IS_MEMBER", "IS_ROLEMEMBER", "IS_SRVROLEMEMBER", "LOGINPROPERTY", "ORIGINAL_LOGIN", "PERMISSIONS", "PWDENCRYPT", "PWDCOMPARE", "SESSION_USER", "SESSIONPROPERTY", "SUSER_ID", "SUSER_NAME", "SUSER_SID", "SUSER_SNAME", "SYSTEM_USER", "USER", "USER_ID", "USER_NAME", "ASCII", "CHAR", "CHARINDEX", "CONCAT", "DIFFERENCE", "FORMAT", "LEFT", "LEN", "LOWER", "LTRIM", "NCHAR", "PATINDEX", "QUOTENAME", "REPLACE", "REPLICATE", "REVERSE", "RIGHT", "RTRIM", "SOUNDEX", "SPACE", "STR", "STUFF", "SUBSTRING", "UNICODE", "UPPER", "BINARY_CHECKSUM", "CHECKSUM", "CONNECTIONPROPERTY", "CONTEXT_INFO", "CURRENT_REQUEST_ID", "ERROR_LINE", "ERROR_NUMBER", "ERROR_MESSAGE", "ERROR_PROCEDURE", "ERROR_SEVERITY", "ERROR_STATE", "FORMATMESSAGE", "GETANSINULL", "GET_FILESTREAM_TRANSACTION_CONTEXT", "HOST_ID", "HOST_NAME", "ISNULL", "ISNUMERIC", "MIN_ACTIVE_ROWVERSION", "NEWID", "NEWSEQUENTIALID", "ROWCOUNT_BIG", "XACT_STATE", "TEXTPTR", "TEXTVALID", "COLUMNS_UPDATED", "EVENTDATA", "TRIGGER_NESTLEVEL", "UPDATE", "CHANGETABLE", "CHANGE_TRACKING_CONTEXT", "CHANGE_TRACKING_CURRENT_VERSION", "CHANGE_TRACKING_IS_COLUMN_IN_MASK", "CHANGE_TRACKING_MIN_VALID_VERSION", "CONTAINSTABLE", "FREETEXTTABLE", "SEMANTICKEYPHRASETABLE", "SEMANTICSIMILARITYDETAILSTABLE", "SEMANTICSIMILARITYTABLE", "FILETABLEROOTPATH", "GETFILENAMESPACEPATH", "GETPATHLOCATOR", "PATHNAME", "GET_TRANSMISSION_STATUS"];

  constructor(private monaco: any) {
    fetch('assets/datasource2.json').then(
      res => res.json()
    ).then(data => this.datasource = data);
  }

  public onParse = (parseResult: IParseResult) => {
    //
  };

  public onSuggestTableNames?: (cursorInfo?: ICursorInfo<ITableInfo>) => Promise<ICompletionItem[]> = cursorInfo => {
    const tableNameList = Object.keys(this.datasource);
    return Promise.resolve(
      tableNameList.map(name => {
        return {
          label: name,
          insertText: name,
          sortText: `A${name}`,
          detail: '数据表',
          kind: this.monaco.languages.CompletionItemKind.Folder,
        };
      }),
    );
  };

  public onSuggestTableFields?: (
    tableInfo?: ITableInfo,
    cursorValue?: string,
    rootStatement?: IStatement,
  ) => Promise<ICompletionItem[]> = tableInfo => {
    console.log('tableInfo>>>',tableInfo);
    const name = tableInfo.tableName.value;
    const fieldNameList = this.datasource[name.toUpperCase()].map(v => v.name);
    return Promise.resolve(
      fieldNameList
        .map(eachName => {
          console.log('namespace>>>',_.get(tableInfo, 'namespace.value', ''));
          console.log('tableName>>>',_.get(tableInfo, 'tableName.value', ''));
          return eachName;
        })
        .map(fieldName => {
          console.log('建议字段>>>',fieldName);
          return {
            label: fieldName,
            insertText: fieldName,
            sortText: `B${fieldName}`,
            detail: '字段',
            kind: this.monaco.languages.CompletionItemKind.Field,
          };
        }),
    );
  };

  public pipeKeywords = (keywords: IMatching[]) => {
    return keywords
      .filter(matching => {
        return matching.type === 'string';
      })
      .map(matching => {
        const value = /[a-zA-Z]+/.test(matching.value.toString())
          ? _.upperCase(matching.value.toString())
          : matching.value.toString();
        return {
          label: value,
          insertText: value,
          documentation: 'documentation',
          detail: '关键字',
          kind: this.monaco.languages.CompletionItemKind.Keyword,
          sortText: `W${matching.value}`,
        };
      });
  };

  public onSuggestFunctionName?: (inputValue?: string) => Promise<ICompletionItem[]> = inputValue => {
    return Promise.resolve(
      this.functionNames.map(each => {
        return {
          label: each,
          insertText: each,
          sortText: `C${each}`,
          detail: '方法',
          kind: this.monaco.languages.CompletionItemKind.Function,
        };
      }),
    );
  };

  public onSuggestFieldGroup?: (tableNameOrAlias?: string) => ICompletionItem = tableNameOrAlias => {
    return {
      label: tableNameOrAlias,
      insertText: tableNameOrAlias,
      sortText: `D${tableNameOrAlias}`,
      kind: this.monaco.languages.CompletionItemKind.Folder,
    };
  };

  public onHoverTableField?: (fieldName?: string, extra?: ICompletionItem) => Promise<any> = (...args) => {
    return Promise.resolve([
      { value: 'onHoverTableField' },
      {
        value: `\`\`\`json\n${JSON.stringify(args, null, 2)}\n\`\`\``,
      },
    ]);
  };

  public onHoverTableName?: (cursorInfo?: ICursorInfo) => Promise<any> = (...args) => {
    return Promise.resolve([
      { value: 'onHoverTableName' },
      {
        value: `\`\`\`json\n${JSON.stringify(args, null, 2)}\n\`\`\``,
      },
    ]);
  };

  public onHoverFunctionName?: (functionName?: string) => Promise<any> = (...args) => {
    return Promise.resolve([
      { value: 'onHoverFunctionName' },
      {
        value: `\`\`\`json\n${JSON.stringify(args, null, 2)}\n\`\`\``,
      },
    ]);
  };
}
