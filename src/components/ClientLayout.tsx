"use client";
import Navbar from "./Navbar";

export default function ClientLayout({
  children,
  navbar,
}: {
  children: React.ReactNode;
  navbar: boolean;
}) {
  return (
    <>
      {children}
      {navbar && <Navbar />}
    </>
  );
}
