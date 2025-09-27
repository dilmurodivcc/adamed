"use client";
import ClientLayout from "@/components/ClientLayout";

export default function OrdersPage() {
  return (
    <ClientLayout spaceSize={"small"} tabbar={true} activePage={"orders"}>
      <main className="page orders-page">
        <header className="header">
          <div className="top">
            <img src="/icons/arrow.svg" alt="" className="left-side" />
            <h2 className="pageName">Cart</h2>
            <div className="empty"></div>
          </div>
        </header>
        <div className="container">

        <ul className="cart-list">
          {Array.from({ length: 8 }).map((_, i) => (
            <li className="cart-row" key={i}>
              <div className="thumb placeholder" />
              <div className="meta">
                <div className="title">Adamedol</div>
                <div className="subtitle">Quantity: {i + 1}</div>
              </div>
            </li>
          ))}
        </ul>
        <div className="totals">
          <div className="row">
            <span>Total Quantity:</span>
            <strong>14</strong>
          </div>
          <div className="row">
            <span>Total Cost:</span>
            <strong>$140.00</strong>
          </div>
        </div>
        <button className="btn primary full">Submit Order</button>
        </div>
      </main>
    </ClientLayout>
  );
}
