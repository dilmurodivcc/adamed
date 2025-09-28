import "../scss/main.scss";
import AuthGuard from "@/components/AuthGuard";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = {
  title: "My App",
  description: "Example with AuthGuard",
  viewport:
    "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no", // 🔑 zoom bloklandi
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans`}>
        <AuthGuard>{children}</AuthGuard>
      </body>
    </html>
  );
}
