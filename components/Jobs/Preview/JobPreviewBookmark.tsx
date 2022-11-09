import React, { Dispatch, FC, SetStateAction } from "react";
import { saveJob } from "../../../utils/jobs/saveJob";
import { Bookmark } from "../../Icons/Bookmark";
import { SavedJobsMap } from "../types";

interface Props {
  freelancer_id: number;
  jobID: number;
  isSaved: boolean;
  savedJobsMap: SavedJobsMap;
  setSavedJobsMap: Dispatch<SetStateAction<SavedJobsMap>>;
}

export const JobPreviewBookmark: FC<Props> = ({
  freelancer_id,
  jobID,
  isSaved,
  savedJobsMap,
  setSavedJobsMap,
}) => {
  return (
    <button
      onClick={async () => {
        const wasSuccessful = await saveJob(freelancer_id, jobID, isSaved);
        if (wasSuccessful) {
          if (savedJobsMap[jobID]) {
            const savedJobsMapCopy = savedJobsMap;
            delete savedJobsMapCopy[jobID];
            setSavedJobsMap({ ...savedJobsMapCopy });
          } else {
            setSavedJobsMap((prev: SavedJobsMap) => ({
              ...prev,
              [jobID]: true,
            }));
          }
        }
      }}
    >
      <Bookmark isFilled={isSaved} />
    </button>
  );
};
