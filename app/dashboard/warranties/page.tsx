import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import WarrantyList from "@/components/warranties/WarrantyList";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Tables Page | Next.js E-commerce Dashboard Template",
  description: "This is Tables page for TailAdmin Next.js",
  // other metadata
};

const TablesPage = () => {
  return (
    <>
      <Breadcrumb pageName="Warranty List" />

      <div className="flex flex-col gap-10">
        <WarrantyList />
      </div>
    </>
  );
};

export default TablesPage;
