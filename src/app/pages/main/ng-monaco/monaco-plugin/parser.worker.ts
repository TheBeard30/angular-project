import {mysqlParser} from "../sql/sql-parser";

const ctx: Worker = self as any;

ctx.onmessage = event => {
  ctx.postMessage(mysqlParser(event.data.text, event.data.index));
};

export default null as any;
