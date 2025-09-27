"use client";
import TabBar from "./TabBar";

export default function ClientLayout({
  children,
  tabbar,
  activePage,
  spaceSize,
}: {
  children: React.ReactNode;
  tabbar: boolean;
  spaceSize: "large" | "small";
  activePage: "home" | "pharmacies" | "orders" | "account";
}) {
  return (
    <>
    {spaceSize === "large" && (
      <div className="large-space" style={{ height: "135px" }}></div>
    )}
    {spaceSize === "small" && (
      <div className="small-space" style={{ height: "63px" }}></div>
    )}
      {children}
      {tabbar && <TabBar active={activePage} />}
      <div className="space-bott" style={{ height: "100px" }}>

      </div>
    </>
  );
}
