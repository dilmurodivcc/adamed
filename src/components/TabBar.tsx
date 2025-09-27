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
        <img src="/icons/homeIcon.svg" alt="" />
        Home
      </Link>
      <Link
        href="/pharmacies"
        className={`tabbar-item ${active === "pharmacies" ? "active" : ""}`}
      >
        <img src="/icons/pharmaIcon.svg" alt="" />
        Pharmacies
      </Link>
      <Link
        href="/orders"
        className={`tabbar-item ${active === "orders" ? "active" : ""}`}
      >
        <img src="/icons/ordersIcon.svg" alt="" />
        Orders
      </Link>
      <Link
        href="/account"
        className={`tabbar-item ${active === "account" ? "active" : ""}`}
      >
        <img src="/icons/accountIcon.svg" alt="" />
        Account
      </Link>
    </nav>
  );
}
