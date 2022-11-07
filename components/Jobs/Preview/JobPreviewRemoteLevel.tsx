import React, { FC } from "react";
import { JobLength, RemoteLevel } from "../../../globalTypes/databaseTypes";
import { getJobLengthMonths } from "../../../utils/jobs/getJobLengthMonths";
import { getJobRemoteLevelMessage } from "../../../utils/jobs/getJobRemoteLevelMessage";
import { FlexWrapper } from "../../Wrappers/FlexWrapper";

interface Props {
  remoteLevel: RemoteLevel;
  length: JobLength;
}

export const JobPreviewRemoteLevel: FC<Props> = ({ remoteLevel, length }) => {
  return (
    <FlexWrapper>
      <div>{getJobRemoteLevelMessage(remoteLevel)}</div>
      <div className="mx-1 text-gray-600">-</div>
      <div className="text-gray-600">{getJobLengthMonths(length)}</div>
    </FlexWrapper>
  );
};
