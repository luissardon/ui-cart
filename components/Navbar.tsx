"use client";

import Link from "next/link";

export function Navbar() {
  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-4 flex items-center space-x-2 lg:mr-6">
        <span className="text-lg font-bold">C3 UI</span>
      </Link>
    </div>
  );
}
