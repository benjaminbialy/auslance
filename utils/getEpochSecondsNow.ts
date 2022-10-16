const MILLISECONDS_IN_A_SECOND = 1000;

export const getEpochSecondsNow = (): number => {
  return Math.ceil(Date.now() / MILLISECONDS_IN_A_SECOND);
};
