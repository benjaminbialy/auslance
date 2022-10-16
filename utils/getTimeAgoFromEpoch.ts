import { isPlural } from "./isPlural";
import {
  SECONDS_IN_AN_HOUR,
  SECONDS_IN_A_MINUTE,
  SECONDS_IN_A_DAY,
  SECONDS_IN_A_WEEK,
  SECONDS_IN_A_MONTH,
  SECONDS_IN_A_YEAR,
} from "./../constants/timeUnits";
import { ONE_SECOND } from "../constants/timeUnits";
import { secondsToMinutes } from "./secondConversions/secondsToMinutes";
import { secondsToHours } from "./secondConversions/secondsToHours";
import { secondsToDays } from "./secondConversions/secondsToDays";
import { secondsToWeeks } from "./secondConversions/secondsToWeeks";
import { secondsToMonths } from "./secondConversions/secondsToMonths";
import { getEpochSecondsNow } from "./getEpochSecondsNow";

export const getTimeAgoFromEpoch = (epoch: number): string => {
  const TWO_WEEKS_AGO = SECONDS_IN_A_WEEK * 2;
  const ONE_AND_A_HALF_MONTHS_AGO = SECONDS_IN_A_MONTH * 1.5;
  const secondsAgo = getEpochSecondsNow() - epoch;

  if (secondsAgo < ONE_SECOND) {
    return "now";
  } else if (secondsAgo < SECONDS_IN_A_MINUTE) {
    return secondsAgoMessage(secondsAgo);
  } else if (secondsAgo < SECONDS_IN_AN_HOUR) {
    const minutesAgo = secondsToMinutes(secondsAgo);
    return getTimeUnitMessage("minute", minutesAgo);
  } else if (secondsAgo < SECONDS_IN_A_DAY) {
    const hoursAgo = secondsToHours(secondsAgo);
    return getTimeUnitMessage("hour", hoursAgo);
  } else if (secondsAgo < TWO_WEEKS_AGO) {
    const daysAgo = secondsToDays(secondsAgo);
    return getTimeUnitMessage("day", daysAgo);
  } else if (secondsAgo < ONE_AND_A_HALF_MONTHS_AGO) {
    const weeksAgo = secondsToWeeks(secondsAgo);
    return getTimeUnitMessage("week", weeksAgo);
  } else if (secondsAgo < SECONDS_IN_A_YEAR) {
    const monthsAgo = secondsToMonths(secondsAgo);
    return getTimeUnitMessage("month", monthsAgo);
  } else if (secondsAgo >= SECONDS_IN_A_YEAR) {
    const yearsAgo = secondsToMonths(secondsAgo);
    return getTimeUnitMessage("year", yearsAgo);
  }

  console.log("Something went wrong with the time calculation!");
  return "now";
};

const secondsAgoMessage = (secondsAgo: number) => {
  return secondsAgo + " seconds ago";
};

const getTimeUnitMessage = (timeUnit: TimeUnit, units: number) => {
  return units + ` ${timeUnit}` + (isPlural(units) && "s") + " ago";
};

type TimeUnit = "minute" | "hour" | "day" | "week" | "month" | "year";
