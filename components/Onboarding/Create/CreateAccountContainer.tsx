import React, { FC, useState } from "react";
import { CreateAccount } from "./CreateAccount";

export const CreateAccountContainer: FC = () => {
  const [loading, setLoading] = useState(false);

  // choose freelancer or employer account
  // for freelancer: get following
  // hourly_rate int not null,
  // bio text,
  // headline text not null,
  // location text not null,
  // timezone text,
  // linkedin text,
  // github text,
  // years_of_experience int default 0,
  // expertise_level expertise default 'beginner',
  // skills text[],
  // area_of_work area,
  // visibility visibility,
  // availability_per_week int,
  // time_available int check (time_available between 0 and 24),
  // website text

  // for employer
  // get following:
  // hourly_budget int not null,
  // bio text,
  // name text not null,
  // location text not null,
  // timezone text,
  // linkedin text,
  // time_available int not null check (time_available between 0 and 24),
  // website text,
  // policies text[]

  // once completed mark as onboarded
  return <CreateAccount {...{ loading }} />;
};
