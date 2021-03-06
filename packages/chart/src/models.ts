import Highcharts from 'highcharts';

export interface commonOptions {
  title?: Highcharts.TitleOptions,
  subtitle?: Highcharts.SubtitleOptions,
  boost?: Highcharts.BoostOptions,
  loading?: Highcharts.LoadingOptions,
  tooltip?: Highcharts.TooltipOptions,
  xAxis?: Highcharts.XAxisOptions,
  yAxis?: Highcharts.YAxisOptions,
  zAxis?: Highcharts.ZAxisOptions,
}

export interface chartOptions {
  chart?: Highcharts.ChartOptions,
  series?: Highcharts.SeriesOptionsType[],
  plotOptions?: Highcharts.PlotOptions
}

export interface freeChartOptions {
  chart?: Highcharts.ChartOptions,
  series?: Partial<Highcharts.SeriesOptionsType>[],
}

export interface OnClickListener {
  // eslint-disable-next-line no-unused-vars
  click(event: any):void
}
