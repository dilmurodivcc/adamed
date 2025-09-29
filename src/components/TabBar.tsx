"use client";
import Link from "next/link";

export default function TabBar({
  active,
}: {
  active: "home" | "pharmacies" | "orders" | "account";
}) {
  return (
    <nav className="tabbar">
      <Link
        href="/home"
        className={`tabbar-item ${active === "home" ? "active" : ""}`}
      >
        <img width={24} height={24} src="/icons/homeIcon.svg" alt="" />
        Home
      </Link>
      <Link
        href="/pharmacies"
        className={`tabbar-item ${active === "pharmacies" ? "active" : ""}`}
      >
        <img width={24} height={24} src="/icons/pharmaIcon.svg" alt="" />
        Pharmacies
      </Link>
      <Link
        href="/orders"
        className={`tabbar-item ${active === "orders" ? "active" : ""}`}
      >
        <img width={24} height={24} src="/icons/ordersIcon.svg" alt="" />
        Orders
      </Link>
      <Link
        href="/account"
        className={`tabbar-item ${active === "account" ? "active" : ""}`}
      >
        <img width={24} height={24} src="/icons/accountIcon.svg" alt="" />
        Account
      </Link>
    </nav>
  );
}
