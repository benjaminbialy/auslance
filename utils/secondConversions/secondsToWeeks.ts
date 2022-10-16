import { SECONDS_IN_A_WEEK } from "../../constants/timeUnits";

export const secondsToWeeks = (seconds: number): number => {
  return Math.ceil(seconds / SECONDS_IN_A_WEEK);
};
