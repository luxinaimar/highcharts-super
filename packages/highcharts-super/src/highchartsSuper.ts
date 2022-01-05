import {
  Line, Area, Chart, commonOptions, freeChartOptions, OnClickListener,
} from '@highcharts-super/chart';
import { ChartFlags } from '@highcharts-super/shared';

export class HighchartsSuper {
  private chart;

  constructor(type: ChartFlags, option: commonOptions) {
    this.chart = chartMap(type, option);
  }

  public draw(renderTo: (string|HTMLElement), chartOptions: freeChartOptions) {
    const clickListrner:OnClickListener = {
      click: this.onClick,
    };
    this.chart.setOnClickListener(clickListrner);
    this.chart.draw(renderTo, chartOptions);
  }

  protected onClick(event):void {
    console.log('click', event);
  }
}

const chartMap = (type: ChartFlags, option: commonOptions):Chart => {
  switch (type) {
    case ChartFlags.LINE:
      return new Line(option);
    case ChartFlags.SPLINE:
      return new Line(option);
    case ChartFlags.AREA:
      return new Area(option);
    default:
      return new Line(option);
  }
};
