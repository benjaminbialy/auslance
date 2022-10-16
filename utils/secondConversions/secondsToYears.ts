import { SECONDS_IN_A_YEAR } from "../../constants/timeUnits";

export const secondsToYears = (seconds: number): number => {
  return Math.ceil(seconds / SECONDS_IN_A_YEAR);
};
