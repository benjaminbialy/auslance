import { RemoteLevel } from "../globalTypes/databaseTypes";

export const getJobRemoteLevelMessage = (remoteLevel: string) => {
  if (remoteLevel === RemoteLevel.none) {
    return "100% Onsite";
  } else if (remoteLevel === RemoteLevel.hybrid) {
    return "Hybrid";
  }
  return "100% Remote";
};
