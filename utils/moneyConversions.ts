const DOLLARS_TO_CENTS = 100;

export const centsToDollars = (cents: number) => {
  return (cents / DOLLARS_TO_CENTS).toFixed(2);
};
