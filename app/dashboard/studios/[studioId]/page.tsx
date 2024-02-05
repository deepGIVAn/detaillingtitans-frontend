import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DownloadIcon from "@/public/svg/tables/download.svg";
import Image from "next/image";
import GetStudio from "@/components/studios/GetStudio";

export const metadata: Metadata = {
  title: "Form Layout Page | Next.js E-commerce Dashboard Template",
  description: "This is Form Layout page for TailAdmin Next.js",
};

const FormLayout = ({ params }: { params: { studioId: string } }) => {
  const { studioId } = params;
  return (
    <>
      <Breadcrumb pageName="Studio Details" />
      <GetStudio id={studioId} />
    </>
  );
};

export default FormLayout;
