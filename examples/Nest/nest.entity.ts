/* eslint-disable max-classes-per-file */

export class NestEntity {
  result?: number;

  resultMessage?: string;

  errCode?: string;

  errMessages?: string[];

  firmName?: string;

  urbanization?: string;

  dLine1?: string;

  dLine2?: string;

  lastLine?: string;

  stringAddress?: string;

  dpc?: string;

  checkDigit?: string;

  cityName?: string;

  stCode?: string;

  zip?: string;

  addon?: string;

  cRoute?: string;

  lacs?: string;

  lotSequence?: string;

  lotCode?: string;

  pmb?: string;

  results?: string[];

  strNum?: string;

  secName?: string;

  secNum?: string;

  countyName?: string;

  countyNum?: string;
}

export class NestInput {
  addressLine?: string;

  addressLine2?: string;

  city?: string;

  state?: string;

  zip?: string;
}
