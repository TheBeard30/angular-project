import GC from "@grapecity/spread-sheets";
import Function = GC.Spread.CalcEngine.Functions.Function;

export class GridCoordinate extends Function{

  constructor() {
    super();
    this.name = 'gridCoordinate';
    this.minArgs = 1;
    this.maxArgs = Infinity;
  }

  evaluate(...args: any[]): any {
    const index = args.pop();
    return args[index - 1];
  }

}
