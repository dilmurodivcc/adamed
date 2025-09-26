"use client";
import Link from "next/link";

export default function TabBar({
  active,
}: {
  active: "home" | "pharmacies" | "orders" | "account";
}) {
  return (
    <nav className="tabbar">
      <Link href="/home" className={active === "home" ? "active" : ""}>
        Home
      </Link>
      <Link
        href="/pharmacies"
        className={active === "pharmacies" ? "active" : ""}
      >
        Pharmacies
      </Link>
      <Link href="/orders" className={active === "orders" ? "active" : ""}>
        Orders
      </Link>
      <Link href="/account" className={active === "account" ? "active" : ""}>
        Account
      </Link>
    </nav>
  );
}
