import React, { Dispatch, FC, SetStateAction } from "react";

interface Props {
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
}

export const EmployerAccount: FC<Props> = ({ loading, setLoading }) => {
  return <form>EmployerAccount</form>;
};
