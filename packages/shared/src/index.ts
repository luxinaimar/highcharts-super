import Highcharts from 'highcharts';

export const isObject = (val: unknown): val is Record<any, any> => val !== null && typeof val === 'object';
export const extend = Object.assign;
export const isNotExist = (val: unknown): boolean => val === null || typeof val === 'undefined';
export {
  ChartFlags,
  ChartFlagsObj,
} from './chartFlags';

export const addType = (type:string, freeSeries:Partial<Highcharts.SeriesOptionsType>[]) => {
  const series = [];
  if (freeSeries && freeSeries.length) {
    freeSeries.forEach((item) => {
      series.push({
        type,
        ...item,
      });
    });
  }
  return series;
};
