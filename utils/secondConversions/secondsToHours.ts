import { SECONDS_IN_AN_HOUR } from "../../constants/timeUnits";

export const secondsToHours = (seconds: number): number => {
  return Math.ceil(seconds / SECONDS_IN_AN_HOUR);
};
