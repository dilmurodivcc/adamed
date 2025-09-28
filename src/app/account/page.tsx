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
    { label: "Мой профиль", icon: "/icons/profile/user.svg" },
    { label: "Мои счета", icon: "/icons/profile/credit.svg" },
    { label: "Реферальная ссылка", icon: "/icons/profile/users.svg" },
    { label: "Операции", icon: "/icons/profile/clock.svg" },
    { label: "Мои документы", icon: "/icons/profile/file.svg" },
    { label: "FAQ", icon: "/icons/profile/faq.svg" },
    { label: "Служба поддержки", icon: "/icons/profile/phone.svg" },
    { label: "Настройки", icon: "/icons/profile/settings.svg" },
    { label: "Выйти", icon: "/icons/profile/log-out.svg" },
  ];

  const handleBack = () => {
    window.history.back();
  }
  return (

    <ClientLayout spaceSize="small" tabbar={true} activePage={"account"}>
      <main className="page account-page">
        <header className="header">
          <div className="top">
            <img width={20} height={20} src="/icons/arrow.svg" onClick={handleBack} alt="" className="left-side" />
            <h2 className="pageName">Profile</h2>
            <div className="empty"></div>
          </div>
        </header>
        <div className="container">
          <div className="profile">
            <img width={128} height={128} src="/image/avatar.png" alt="" />
            <div className="name">Ethan Carter</div>
            <div className="id">Agent ID: 12345</div>
            <button className="btn-primary small" onClick={handleLogout}>
              Logout
            </button>
          </div>
          <ul className="menu">
            {items.map((label) => (
              <li
                className="menu-row"
                key={label.label}
                onClick={label.label === "Выйти" ? handleLogout : undefined}
              >
                <span className="menu-label">
                  <img width={24} height={24} src={label.icon} alt="" /> {label.label}
                </span>
                <img src="/icons/chevron-right.svg" alt="" />
              </li>
            ))}
          </ul>
        </div>
      </main>
    </ClientLayout>
  );
}
