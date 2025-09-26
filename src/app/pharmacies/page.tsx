"use client";
import ClientLayout from "@/components/ClientLayout";
import TabBar from "@/components/TabBar";

export default function PharmaciesPage() {
  return (
    <ClientLayout navbar={true}>
      <main className="page pharmacies-page">
        <h2>Pharmacies</h2>
        <div className="search input">
          <input placeholder="Search  pharmacies" />
        </div>
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
      </main>
      <TabBar active="pharmacies" />
    </ClientLayout>
  );
}
