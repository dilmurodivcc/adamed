"use client";
import ClientLayout from "@/components/ClientLayout";
import Link from "next/link";
const cartsData = [
  { id: 1, name: "Adamedol", quantity: 2, image: "/image/cart1.png" },
  { id: 2, name: "Paracetamol", quantity: 1, image: "/image/cart2.png" },
  { id: 3, name: "Ibuprofen", quantity: 3, image: "/image/cart3.png" },
  { id: 4, name: "Adamedol", quantity: 2, image: "/image/cart1.png" },
  { id: 5, name: "Paracetamol", quantity: 1, image: "/image/cart2.png" },
  { id: 6, name: "Ibuprofen", quantity: 3, image: "/image/cart3.png" },
  { id: 7, name: "Adamedol", quantity: 2, image: "/image/cart1.png" },
  { id: 8, name: "Paracetamol", quantity: 1, image: "/image/cart2.png" },
  { id: 9, name: "Ibuprofen", quantity: 3, image: "/image/cart3.png" },
]
  const handleBack = () => {
    window.history.back();
  }
export default function OrdersPage() {
  return (
    <ClientLayout spaceSize={"small"} tabbar={true} activePage={"orders"}>
      <main className="page orders-page">
        <header className="header">
          <div className="top">
            <img width={20} height={20} src="/icons/arrow.svg" onClick={handleBack} alt="" className="left-side" />
            <h2 className="pageName">Cart</h2>
            <div className="empty"></div>
          </div>
        </header>
        <div className="container">

        <ul className="cart-list">
          {cartsData.map((item) => (
            <li className="cart-row" key={item.id}>
              <div className="thumb">
                <img width={56} height={56} src={item.image} alt={item.name} />
              </div>
              <div className="meta">
                <div className="title">{item.name}</div>
                <div className="subtitle">Quantity: {item.quantity}</div>
              </div>
            </li>
          ))}
        </ul>
        <div className="totals">
          <div className="row">
            <div className="left" >
              <h4 className="title">Total Quantity:</h4>
              <p className="subtitle">Total: {cartsData.reduce((acc, item) => acc + item.quantity, 0)}</p>
            </div>
            <h3 className="title" >{cartsData.reduce((acc, item) => acc + item.quantity, 0)}</h3>
          </div>
          <div className="row">
            <div className="left" >
              <h4 className="title">Total Cost</h4>
              <p className="subtitle">Total: {cartsData.reduce((acc, item) => acc + item.quantity, 0) * 20}.00</p>
            </div>
            <h3 className="title">${cartsData.reduce((acc, item) => acc + item.quantity, 0) * 20}.00</h3>
          </div>
        </div>
        <Link href="/orders/history">
          <button className="btn-primary full">Submit Order</button>
        </Link>
        </div>
      </main>
    </ClientLayout>
  );
}
