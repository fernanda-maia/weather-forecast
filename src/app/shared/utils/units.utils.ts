import { Units } from '../models/units.enum';


export function unitToSymbol(unit: string): string {
    switch (unit) {
      case Units.Metric:
        return '˚C';
      case Units.Imperial:
        return '˚F';
      default:
        return 'K';
    }
  }
  
