"use client";
import { useLayoutEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Sell() {
  const { data: session } = useSession();
  const router = useRouter();

  useLayoutEffect(() => {
    if (!session) {
      router.replace("/login");
      return;
    }
  }, [router, session]);
}
