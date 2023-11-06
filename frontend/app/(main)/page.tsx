"use client";
import { Button, buttonVariants } from "@/components/ui/button";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();
  const logout = () => {
    localStorage.removeItem("users");
    router.push("/auth/sign-in");
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button onClick={logout}>Logout</Button>
      page
    </main>
  );
}
