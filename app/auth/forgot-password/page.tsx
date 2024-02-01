import { Metadata } from "next";
import ForgotPassword from "@/components/auth/forgotpassword";

export const metadata: Metadata = {
  title: "Admin Panel",
  description: "This is a Panel",
};

export default function Home() {
  return (
    <>
      <ForgotPassword />
    </>
  );
}
