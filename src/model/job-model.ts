export enum JobsTypes {
  Hourly = "hourly",
  Daily = "daily",
  Monthly_Hourly = "monthly-hourly",
  Monthly_Daily = "monthly-daily",
}

export const JobsHumanized = {
  [JobsTypes.Hourly]: "שעתי",
  [JobsTypes.Daily]: "יומי",
  [JobsTypes.Monthly_Hourly]: "חודשי (צבירת שעות)",
  [JobsTypes.Monthly_Daily]: "חודשי (צבירת ימים)",
};

export type Job = Hourly | Daily | Monthly_Daily | Monthly_Hourly;

export interface JobInfo {
  id: string;
  name: string;
  employer?: string;
  count: number;
  primary: boolean;
}

export interface Hourly extends JobInfo {
  accumulation: WorkDay[];
}

export interface Daily extends JobInfo {
  accumulation: IsoDate[];
}

export interface Monthly_Daily extends JobInfo {
  accumulation: MonthDaily[];
}

export interface Monthly_Hourly extends JobInfo {
  accumulation: MonthHourly[];
}

export type IsoDate = Date | string;

export interface WorkDay {
  date: IsoDate;
  start: Hour;
  end: Hour;
  sum: number;
}

export interface Month {
  year: number;
  month: number;
}

export interface MonthDaily extends Month {
  days: IsoDate[];
}

export interface MonthHourly extends Month {
  days: WorkDay[];
}

export type Hour = string; //implement
