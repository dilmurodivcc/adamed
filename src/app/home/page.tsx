"use client";
import ClientLayout from "@/components/ClientLayout";
import TabBar from "@/components/TabBar";

export default function HomePage() {
  return (
    <ClientLayout navbar={true}>
      <main className="page home-page">
        <h2>Product Catalog</h2>
        <section className="search">
          <div className="input">
            <input placeholder="Search  pharmacies" />
          </div>
        </section>
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
      </main>
      <TabBar active="home" />
    </ClientLayout>
  );
}
