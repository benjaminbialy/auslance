import React, { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
  isColumn?: boolean;
  flexProps?: string;
}

export const FlexWrapper: FC<Props> = ({
  children,
  isColumn = false,
  flexProps = "",
}) => {
  return (
    <div className={`flex ${isColumn && "flex-col"} ${flexProps}`}>
      {children}
    </div>
  );
};
