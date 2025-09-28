"use client";
import ClientLayout from "@/components/ClientLayout";


const PharmaciesData = [
  { id: 1, name: "Anytown Pharmacy", address: "123 Main Street, Anytown" },
  { id: 2, name: "Oak Avenue Pharmacy", address: "123 Main Street, Anytown" },
  { id: 3, name: "Pine Lane Pharmacy", address: "123 Main Street, Anytown" },
  { id: 4, name: "Elm Street Pharmacy", address: "123 Main Street, Anytown" },
  { id: 5, name: "Maple Drive Pharmacy", address: "123 Main Street, Anytown" },
]

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
            {PharmaciesData.map((pharmacy) => (
              <li className="row" key={pharmacy.id}>
                <div className="meta">
                  <div className="title">{pharmacy.name}</div>
                  <div className="subtitle">{pharmacy.address}</div>
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
