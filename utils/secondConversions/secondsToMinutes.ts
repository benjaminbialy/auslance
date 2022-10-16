import { SECONDS_IN_A_MINUTE } from "../../constants/timeUnits";
export const secondsToMinutes = (seconds: number): number => {
  return Math.ceil(seconds / SECONDS_IN_A_MINUTE);
};
