"use client";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const token =
      typeof window !== "undefined" ? localStorage.getItem("token") : null;
    if (!token && pathname !== "/login") {
      router.replace("/login");
    } else {
      setChecked(true);
    }
  }, [router, pathname]);

  if (!checked) return null;
  return <>{children}</>;
}
