import Highcharts from 'highcharts';
import { addType } from '@highcharts-super/shared';
import { commonOptions, chartOptions, freeChartOptions } from './models';
import { Chart } from './chart';

// Load the exporting module.
// import Exporting from 'highcharts/modules/exporting';
// // Initialize exporting module.
// Exporting(Highcharts);
export class Line extends Chart {
  constructor(commonOptions:commonOptions) {
    super(commonOptions);
    console.log('commonOptions', this.options);
  }

  public draw(renderTo: (string|HTMLElement), freeChartOptions: freeChartOptions):void {
    const series = addType('line', freeChartOptions.series);
    const chartOptions:chartOptions = {
      ...freeChartOptions,
      series,
    };
    super.draw(renderTo, chartOptions);
    console.log('this.options', this.options);
    Highcharts.chart(renderTo, this.options);
  }
}
