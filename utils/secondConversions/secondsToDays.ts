import { SECONDS_IN_A_DAY } from "../../constants/timeUnits";

export const secondsToDays = (seconds: number): number => {
  return Math.ceil(seconds / SECONDS_IN_A_DAY);
};
