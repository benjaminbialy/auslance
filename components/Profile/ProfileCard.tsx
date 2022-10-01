import Link from "next/link";
import React, { FC } from "react";

interface Props {
  type: "Freelancer" | "Employer";
  topLine: string;
  secondLine: string;
  bio: string;
  accountID: string;
}

const ProfileCard: FC<Props> = ({
  type,
  topLine,
  secondLine,
  bio,
  accountID,
}) => {
  return (
    <div className="p-4 my-2 border-2 border-slate-200 w-96 mx-20">
      <div>{type}</div>
      <Link href={`/profiles/${type.toLowerCase()}/${accountID}`}>
        <a className="text-lg">{topLine}</a>
      </Link>
      <div>{secondLine}</div>
      <div>{bio}</div>
    </div>
  );
};

export default ProfileCard;
