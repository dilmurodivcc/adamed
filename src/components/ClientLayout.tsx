"use client";
import TabBar from "./TabBar";

export default function ClientLayout({
  children,
  tabbar,
  activePage,
}: {
  children: React.ReactNode;
  tabbar: boolean;
  activePage: any;

}) {
  return (
    <>
      {children}
      {tabbar && <TabBar active={activePage} />}
    </>
  );
}
