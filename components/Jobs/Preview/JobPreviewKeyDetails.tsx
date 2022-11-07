import React, { FC } from "react";
import { getTimeAgoFromEpoch } from "../../../utils/getTimeAgoFromEpoch";
import { centsToDollars } from "../../../utils/moneyConversions";
import { FlexWrapper } from "../../Wrappers/FlexWrapper";
import JobInterface from "../JobInterface";

interface Props {
  job: JobInterface;
}

export const JobPreviewKeyDetails: FC<Props> = ({ job }) => {
  const { max_cents_per_hour, full_price, time_posted } = job;
  return (
    <FlexWrapper>
      <div className="text-gray-600">
        {job.is_hourly
          ? `Paying up to $${centsToDollars(max_cents_per_hour)} per hour`
          : `Has a budget of $${centsToDollars(full_price)}`}
      </div>
      <div className="mx-1 text-gray-600">-</div>
      <div className="text-gray-600">
        Posted {getTimeAgoFromEpoch(time_posted)}
      </div>
    </FlexWrapper>
  );
};
