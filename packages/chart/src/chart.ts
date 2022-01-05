import { commonOptions, chartOptions } from './models';
import { comOpts } from './comOpts';

export abstract class Chart {
  protected options:commonOptions&chartOptions;

  constructor(commonOptions:commonOptions) {
    this.options = {
      ...comOpts,
      ...commonOptions,
    };
  }

  public draw(renderTo: (string|HTMLElement), chartOptions: chartOptions):void {
    this.options = {
      ...this.options,
      ...chartOptions,
    };
    console.log('this.options', this.options);
  }
}
