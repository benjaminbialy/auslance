import React from "react";
import Link from "../../node_modules/next/link";

function JobsNavItem({ href, text }) {
  return (
    <Link href={href}>
      <a className={""}>{text}</a>
    </Link>
  );
}

export default JobsNavItem;
