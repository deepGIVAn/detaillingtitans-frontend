import { Metadata } from "next";
import SignIn from "@/components/auth/signin";

export const metadata: Metadata = {
  title: "Detailing Titans",
  description: "",
};

export default function Home() {
  return (
    <>
      <SignIn />
    </>
  );
}
