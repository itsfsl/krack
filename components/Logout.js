"use client";

import React from "react";
import Button from "./Button";
import { useAuth } from "@/context/AuthContext";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Logout() {
  const { logout, currentUser } = useAuth();

  const pathname = usePathname();

  if (!currentUser) {
    return null;
  } else {
    if (pathname === "/") {
      return (
        <Link href={"/dashboard"}>
          <Button dark text="Go to Dashboard" />
        </Link>
      );
    }

    if (pathname === "/dashboard") {
      return <Button text="Log Out" clickHandler={logout} />;
    }
  }
}
