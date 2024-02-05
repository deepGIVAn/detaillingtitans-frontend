import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import CreateStudio from "@/components/studios/CreateStudio";
import CreateWarranty from "@/components/warranties/CreateWarranty";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Form Layout Page | Next.js E-commerce Dashboard Template",
  description: "This is Form Layout page for TailAdmin Next.js",
};

const FormLayout = () => {
  return (
    <>
      <Breadcrumb pageName="E-Warranty" />
      <CreateWarranty />
    </>
  );
};

export default FormLayout;
