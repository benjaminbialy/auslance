import Link from "next/link";
import { FC } from "react";

export const NavBar: FC = () => {
  return (
    <div className="h-16 sm:h-20 bg-slate-50 flex items-center px-4 sm:px-6 md:px-8">
      <Link href="/">
        <a className="text-xl sm:text-2xl md:text-3xl">
          <span className="text-emerald-500">aus</span>lance
        </a>
      </Link>
    </div>
  );
};
