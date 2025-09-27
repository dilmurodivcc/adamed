"use client";
import ClientLayout from "@/components/ClientLayout";
import { useRouter } from "next/navigation";

export default function AccountPage() {
  const router = useRouter();
  const handleLogout = () => {
    try {
      localStorage.removeItem("token");
      router.replace("/login");
    } catch {}
  };
  const items = [
    "Мой профиль",
    "Мои счета",
    "Реферальная ссылка",
    "Операции",
    "Мои документы",
    "FAQ",
    "Служба поддержки",
    "Настройки",
    "Выйти",
  ];

  return (
    <ClientLayout spaceSize="small" tabbar={true} activePage={"account"}>
      <main className="page account-page">
        <header className="header">
          <div className="top">
            <img src="/icons/arrow.svg" alt="" className="left-side" />
            <h2 className="pageName">Profile</h2>
            <div className="empty"></div>
          </div>
        </header>
        <div className="container">
          <div className="profile">
            <div className="avatar placeholder" />
            <div className="name">Ethan Carter</div>
            <div className="id">Agent ID: 12345</div>
            <button className="btn" onClick={handleLogout}>
              Logout
            </button>
          </div>
          <ul className="menu">
            {items.map((label) => (
              <li
                className="menu-row"
                key={label}
                onClick={label === "Выйти" ? handleLogout : undefined}
              >
                <span>{label}</span>
                <span>›</span>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </ClientLayout>
  );
}
