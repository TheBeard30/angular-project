export interface TableData{
  tableName: string;
  fieldList: Array<TableField>
}

export interface TableField{
  name: string;
  type: string;
  checked: boolean;
}
