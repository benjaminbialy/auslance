import { SECONDS_IN_A_MONTH } from "../../constants/timeUnits";

export const secondsToMonths = (seconds: number): number => {
  return Math.ceil(seconds / SECONDS_IN_A_MONTH);
};
