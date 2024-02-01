import Dashboard from "@/components/Dashboard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Panel",
  description: "This is a Panel",
};

export default function Home() {
  return (
    <>
      <Dashboard />
    </>
  );
}
