export const getJobLengthMonths = (jobLength: string) => {
  if (jobLength === "short") {
    return "Short term (< 1 month)";
  } else if (jobLength === "medium") {
    return "Medium term (1-3 months)";
  }
  return "Long term (>3 months)";
};
