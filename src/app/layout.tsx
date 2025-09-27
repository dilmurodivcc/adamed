import "../scss/main.scss";
import AuthGuard from "@/components/AuthGuard";
import Splash from "@/components/Splash";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link
          rel="shortcut icon"
          href="/public/lifecar.png"
          type="image/x-icon"
        />
        <title>Adamed</title>
      </head>
      <body>
        <Splash />
        <AuthGuard>{children}</AuthGuard>
      </body>
    </html>
  );
}
