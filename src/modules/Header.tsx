import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex justify-between items-center w-full py-5 px-10 bg-[#f7f4ea] z-50 shadow-lg border-b-2 border-white">
      <div>
        <h1 className="text-2xl font-semibold">Logo</h1>
      </div>
      <div className="">
        <ul className="flex justify-center items-center gap-6">
          <li>
            <Link href="/">Dashboard</Link>
          </li>
          <li>
            <Link href="/admin">Admin</Link>
          </li>
          <li>
            <Link href="/staff">Staffs</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
