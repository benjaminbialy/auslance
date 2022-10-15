import React, { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
  isColumn?: boolean;
  flexProps?: string;
  colour?: string;
  margin?: string;
  padding?: string;
}

export const FlexWrapper: FC<Props> = ({
  children,
  isColumn = false,
  flexProps = "",
  colour = "",
  margin = "",
  padding = "",
}) => {
  return (
    <div
      className={`flex ${
        isColumn && "flex-col"
      } ${flexProps} ${colour} ${margin} ${padding}`}
    >
      {children}
    </div>
  );
};
