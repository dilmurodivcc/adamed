"use client";
import ClientLayout from "@/components/ClientLayout";

export default function HomePage() {
  return (
    <ClientLayout tabbar={true} activePage={"home"}>
      <main className="page home-page">
        <header className="header">
          <div className="top">
            <img src="/icons/arrow.svg" alt="" className="left-side" />
            <h2 className="pageName">Product Catalog</h2>
            <div className="empty"></div>
          </div>
          <div className="header-input-container">
            <div className="input-container">
              <img  src="/icons/search.svg" alt="" className="search-icon" />
              <input type="text" placeholder="Search  pharmacies" className="input" />
            </div>
          </div>
        </header>
        <div className="container">
          <section className="featured">
            <div className="card placeholder" />
            <div className="card placeholder" />
            <div className="card placeholder" />
          </section>
          <section className="products">
            {Array.from({ length: 12 }).map((_, i) => (
              <div className="product-row" key={i}>
                <div className="thumb placeholder" />
                <div className="meta">
                  <div className="title">
                    Product {String.fromCharCode(65 + (i % 26))}
                  </div>
                  <div className="subtitle">100mg</div>
                </div>
                <div className="qty">
                  <button>-</button>
                  <span>0</span>
                  <button>+</button>
                </div>
              </div>
            ))}
          </section>
          <div className="action-bar">
            <button className="btn primary">Add to Order</button>
          </div>
        </div>
      </main>
    </ClientLayout>
  );
}
