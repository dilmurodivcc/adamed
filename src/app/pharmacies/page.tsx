"use client";
import ClientLayout from "@/components/ClientLayout";

export default function PharmaciesPage() {
  return (
    <ClientLayout spaceSize={"large"} tabbar={true} activePage={"pharmacies"}>
      <main className="page pharmacies-page">
        <header className="header">
          <div className="top">
            <div className="empty"></div>
            <h2 className="pageName">Pharmacies</h2>
            <img src="/icons/filters.svg" alt="" className="right-side" />
          </div>
          <div className="header-input-container">
            <div className="input-container">
              <img src="/icons/search.svg" alt="" className="search-icon" />
              <input
                type="text"
                placeholder="Search  pharmacies"
                className="input"
              />
            </div>
          </div>
        </header>
        <div className="container">
          <ul className="list">
            {Array.from({ length: 8 }).map((_, i) => (
              <li className="row" key={i}>
                <div className="meta">
                  <div className="title">Anytown Pharmacy</div>
                  <div className="subtitle">123 Main Street, Anytown</div>
                </div>
                <button className="btn">Select</button>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </ClientLayout>
  );
}
