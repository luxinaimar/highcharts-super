import { commonOptions, chartOptions, OnClickListener } from './models';
import { comOpts } from './comOpts';

export abstract class Chart {
  protected options:commonOptions&chartOptions;

  protected clickListrner:OnClickListener;

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
      plotOptions: {
        series: {
          cursor: 'pointer',
          events: {
            click: (event: any) => {
              this.clickListrner.click(event);
            },
          },
        },
      },
    };
    console.log('this.options', this.options);
  }

  protected setOnClickListener(clickListrner:OnClickListener) {
    this.clickListrner = clickListrner;
  }
}
