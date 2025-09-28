"use client";
import ClientLayout from "@/components/ClientLayout";
const featuredProducts = [
  { id: 1, title: "Product A", size: "100mg", image: "/image/featured2.png" },
  { id: 2, title: "Product B", size: "200mg", image: "/image/featured1.png" },
  { id: 3, title: "Product C", size: "300mg", image: "/image/featured1.png" },
];
const allProducts = [
  { id: 1, title: "Product A", size: "100mg", dosage: "200mg", image: "/image/productImg1.png" },
  { id: 2, title: "Product B", size: "200mg", dosage: "400mg", image: "/image/productImg2.png" },
  { id: 3, title: "Product C", size: "300mg", dosage: "600mg", image: "/image/productImg3.png" },
];
export default function HomePage() {
  const handleBack = () => {
    window.history.back();
  }
  return (
    <ClientLayout spaceSize={"large"} tabbar={true} activePage={"home"}>
      <main className="page home-page">
        <header className="header">
          <div className="top">
            <img width={20} height={20} src="/icons/arrow.svg" onClick={handleBack} alt="" className="left-side" />
            <h2 className="pageName">Product Catalog</h2>
            <div className="empty"></div>
          </div>
          <div className="header-input-container">
            <div className="input-container">
              <img width={20} height={20} src="/icons/search.svg" alt="" className="search-icon" />
              <input
                type="text"
                placeholder="Search  pharmacies"
                className="input"
              />
            </div>
          </div>
        </header>

        <div className="container">
          <section className="featured">
            <h2 className="title">Featured Products</h2>

            <div className="featured-products">
              {featuredProducts.map((product) => (
                <div className="product" key={product.id}>
                  <img width={160} height={160} src={product.image} alt={product.title} />
                  <div className="product-info">
                    <h3 className="product-title">{product.title}</h3>
                    <p className="product-size">{product.size}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
          <section className="all-products">
            <h2 className="title">All Products</h2>
            <div className="products-list">
              {allProducts.map((product) => (
                <div className="product-row" key={product.id}>
                  <div className="product-info">
                    <h3 className="product-title">{product.title}</h3>
                    <p className="product-size">{product.size}</p>
                    <p className="product-dosage">{product.dosage}</p>
                    <div className="actions">
                      <button className="minus">-</button>
                      <button className="plus">+</button>
                    </div>
                  </div>
                  <img width={130} height={118} src={product.image} alt={product.title} />
                </div>
              ))}
            </div>
          </section>
          <button className="btn-primary full">Add to Order</button>
        </div>
      </main>
    </ClientLayout>
  );
}
