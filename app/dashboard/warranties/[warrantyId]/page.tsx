import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DownloadIcon from "@/public/svg/tables/download.svg";
import Image from "next/image";
import GetWarranty from "@/components/warranties/GetWarranty";

export const metadata: Metadata = {
  title: "Form Layout Page | Next.js E-commerce Dashboard Template",
  description: "This is Form Layout page for TailAdmin Next.js",
};

const FormLayout = ({ params }: { params: { warrantyId: string } }) => {
  const { warrantyId } = params;

  return (
    <>
      <Breadcrumb pageName="E-Warranty Details" />
      <GetWarranty id={warrantyId} />
    </>
  );
};

export default FormLayout;
