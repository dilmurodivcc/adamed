import "../scss/main.scss";
import AuthGuard from "@/components/AuthGuard";
import Splash from "@/components/Splash";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
