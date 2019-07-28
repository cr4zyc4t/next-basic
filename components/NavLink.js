import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import cl from "classnames";

export default function NavLink({ href, children }) {
  const router = useRouter();
  return (
    <li className={cl({ "active": router.pathname === href })}>
      <Link href={href}>
        <a className="nav-link" >{children}</a>
      </Link>
    </li>
  );
}