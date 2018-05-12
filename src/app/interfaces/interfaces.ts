import { Timestamp } from "rxjs";
import { Numeric } from "d3";

export interface Element {
    name: string;
    position: number;
    weight: number;
    symbol: string;
  }
export interface Country {
  name?: string;
  code?: string;
}

export interface Loan {
  country: string;
  countryCode: string;
  date: Date;
  cantidad_prestamos: Numeric;

}