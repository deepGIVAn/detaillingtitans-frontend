// import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import CreateStudio from "@/components/studios/CreateStudio";
import { Metadata } from "next";
// export const metadata: Metadata = {
//   title: "Form Layout Page | Next.js E-commerce Dashboard Template",
//   description: "This is Form Layout page for TailAdmin Next.js",
// };

const Page = () => {
  return (
    <>
      {/* <Breadcrumb pageName="Add Studio" /> */}

      <div className="my-5">
        <CreateStudio />
      </div>
    </>
  );
};

export default Page;
