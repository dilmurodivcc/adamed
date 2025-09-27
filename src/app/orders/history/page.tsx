"use client";
import ClientLayout from "@/components/ClientLayout";

export default function OrderHistoryPage() {
  return (
    <ClientLayout spaceSize="small" tabbar={true} activePage={"orders"}>
      <main className="page order-history-page">
        <header className="header">
          <div className="top">
            <img src="/icons/arrow.svg" alt="" className="left-side" />
            <h2 className="pageName">Order History</h2>
            <div className="empty"></div>
          </div>
        </header>
        <div className="container">
          <ul className="history">
            {Array.from({ length: 10 }).map((_, i) => (
              <li className="row" key={i}>
                <div className="meta">
                  <div className="title">
                    Pharmacy {String.fromCharCode(65 + i)}
                  </div>
                  <div className="subtitle">New</div>
                </div>
                <div className="date">
                  2024-01-{String(i + 10).padStart(2, "0")}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </ClientLayout>
  );
}
