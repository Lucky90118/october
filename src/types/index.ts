export interface BeerI {
  id: string;
  value: number;
  state: string;
  flag: boolean;
}

export interface CupCellPropsI {
  activate: BeerI;
  bet: number;
  balance: number;
  setBalance: any;
}

export interface FirstStatePropsI {
  id: string;
}

export interface SecondStatePropsI {
  id: string;
  value: number;
  balance: number;
  bet: number;
  setBalance: any;
}

export interface ThirdStatePropsI {
  id: string;
  value:number;
  balance: number;
  bet: number;
  setBalance: any;
}

export interface FifthStatePropsI {
  value: number;
}
