"use client";
import ClientLayout from "@/components/ClientLayout";

export default function OrderHistoryPage() {
  return (
    <ClientLayout navbar={true}>
      <main className="page order-history-page">
        <h2>Order History</h2>
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
      </main>
    </ClientLayout>
  );
}
