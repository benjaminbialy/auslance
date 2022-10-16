import React, { FC } from "react";
import { FlexWrapper } from "../Wrappers/FlexWrapper";
import { JobsNavItem } from "./JobsNavItem";

interface Props {
  pathname: string;
}

export const JobsNav: FC<Props> = ({ pathname }) => {
  return (
    <FlexWrapper padding="px-4">
      <JobsNavItem
        href={"/jobs"}
        text={"My Jobs"}
        isThisPage={getIsThisPage(pathname)}
      />
      <JobsNavItem
        href={"/jobs/saved"}
        text={"Saved"}
        isThisPage={getIsThisPage(pathname, "/saved")}
      />
      <JobsNavItem
        href={"/jobs/recent"}
        text={"Recent"}
        isThisPage={getIsThisPage(pathname, "/recent")}
      />
    </FlexWrapper>
  );
};

const getIsThisPage = (
  pathname: string,
  targetPage: "" | "/recent" | "/saved" = ""
): boolean => {
  return pathname === `/jobs${targetPage}`;
};
