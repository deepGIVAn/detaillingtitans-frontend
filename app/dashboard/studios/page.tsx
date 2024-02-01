import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import StuioList from "@/components/studios/StudioList";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Tables Page | Next.js E-commerce Dashboard Template",
  description: "This is Tables page for TailAdmin Next.js",
  // other metadata
};

const TablesPage = () => {
  return (
    <>
      <Breadcrumb pageName="Studio List" />

      <div className="flex flex-col gap-10">
        <StuioList />
      </div>
    </>
  );
};

export default TablesPage;
