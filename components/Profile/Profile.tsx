import React, { Dispatch, FC, SetStateAction } from "react";
import { UserData } from "../../lib/supabase/getUserData";
import ProfileCard from "./ProfileCard";

interface Props {
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  user: UserData;
}

export const Profile: FC<Props> = ({ isLoading, setIsLoading, user }) => {
  const employer = user.employers.length > 0 ? user.employers[0] : null;
  const freelancer = user.freelancers.length > 0 ? user.freelancers[0] : null;

  return (
    <div>
      <div>Welcome, {`${user.first_name} ${user.last_name}`}</div>
      <div>Email: {user.email}</div>
      <div>
        <h3>Accounts</h3>
        {employer && (
          <ProfileCard
            type="Employer"
            topLine={employer.name}
            secondLine={employer.location}
            bio={employer.bio}
            accountID={employer.employer_id}
          />
        )}
        {freelancer && (
          <ProfileCard
            type="Freelancer"
            topLine={freelancer.headline}
            secondLine={freelancer.areaOfWork}
            bio={freelancer.bio}
            accountID={freelancer.freelancer_id}
          />
        )}
      </div>
    </div>
  );
};
