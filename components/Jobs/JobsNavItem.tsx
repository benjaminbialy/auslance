import React, { FC } from "react";
import Link from "../../node_modules/next/link";

interface Props {
  href: string;
  text: string;
  isThisPage: boolean;
}

export const JobsNavItem: FC<Props> = ({ href, text, isThisPage }) => {
  return (
    <Link href={href}>
      <a
        className={`text-lg mr-4 py-2 border-b-4 ${
          isThisPage ? "border-b-emerald-500" : "border-b-white"
        }`}
      >
        {text}
      </a>
    </Link>
  );
};
