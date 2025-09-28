"use client";
import ClientLayout from "@/components/ClientLayout";
const historyData = [
  { id: 1, pharmacy: "Pharmacy A", status: "New", date: "2024-01-10" },
  { id: 2, pharmacy: "Pharmacy B", status: "Processing", date: "2024-01-11" },
  { id: 3, pharmacy: "Pharmacy C", status: "Completed", date: "2024-01-12" },
  { id: 4, pharmacy: "Pharmacy D", status: "Cancelled", date: "2024-01-13" },
  { id: 5, pharmacy: "Pharmacy E", status: "New", date: "2024-01-14" },
  { id: 6, pharmacy: "Pharmacy F", status: "Processing", date: "2024-01-15" },
  { id: 7, pharmacy: "Pharmacy G", status: "Completed", date: "2024-01-16" },
  { id: 8, pharmacy: "Pharmacy H", status: "Cancelled", date: "2024-01-17" },
  { id: 9, pharmacy: "Pharmacy I", status: "New", date: "2024-01-18" },
  { id: 10, pharmacy: "Pharmacy J", status: "Processing", date: "2024-01-19" },
  { id: 11, pharmacy: "Pharmacy K", status: "Completed", date: "2024-01-20" },
  { id: 12, pharmacy: "Pharmacy L", status: "Cancelled", date: "2024-01-21" },
];

  const handleBack = () => {
    window.history.back();
  }
export default function OrderHistoryPage() {
  return (
    <ClientLayout spaceSize="small" tabbar={true} activePage={"orders"}>
      <main className="page order-history-page">
        <header className="header">
          <div className="top">
            <img
              width={20}
              height={20}
              src="/icons/arrow.svg"
              alt=""
              className="left-side"
              onClick={handleBack}
            />
            <h2 className="pageName">Order History</h2>
            <div className="empty"></div>
          </div>
        </header>
        <div className="container">
          <ul className="history">
            {historyData.map((item) => (
              <li className="row" key={item.id}>
                <div className="meta">
                  <div className="title">{item.pharmacy}</div>
                  <div className="subtitle">{item.status}</div>
                </div>
                <div className="date">{item.date}</div>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </ClientLayout>
  );
}
