import React, { FC } from "react";
import { FlexWrapper } from "../../Wrappers/FlexWrapper";

interface Props {
  skills: string[];
  jobID: number;
}

export const JobPreviewSkillsScroller: FC<Props> = ({ skills, jobID }) => {
  return (
    <FlexWrapper>
      {skills.map((skill: string) => (
        <div key={`job-${jobID}-skill-${skill}`}>{skill}</div>
      ))}
    </FlexWrapper>
  );
};
