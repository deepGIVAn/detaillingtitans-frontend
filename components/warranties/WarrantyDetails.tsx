import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import Image from "next/image";
import { Package } from "@/types/package";

export type Warranty = {
  productkey: string;
  studioName: string;
  vehNumber: string;
  vehChassisNo: string;
  startDate: string;
  endDate: string;
  status: string;
};

const packageData: Warranty[] = [
  {
    productkey: "TPUOM10008400934108",
    studioName: "Detailing Titan Dehradun",
    vehNumber: "UK07FR8125",
    vehChassisNo: "MBJABBAFX01703315~1123",
    startDate: "23-01-2024",
    endDate: "23-01-2024",
    status: "Active",
  },
];

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Profile Page | Next.js E-commerce Dashboard Template",
  description: "This is Profile page for TailAdmin Next.js",
  // other metadata
};

const WarrantyDetails = () => {
  return (
    <>
      {/* <Breadcrumb pageName="Profile" /> */}

      <div className="overflow-hidden rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="relative z-20 h-35 md:h-65">
          <Image
            src={"/images/cover/cover-01.png"}
            alt="profile cover"
            className="h-full w-full rounded-tl-sm rounded-tr-sm object-cover object-center"
            width={970}
            height={260}
          />
        </div>
        <div className="px-4 pb-6 text-center lg:pb-8 xl:pb-11.5">
          <div className="relative z-30 mx-auto -mt-22 h-30 w-full max-w-30 rounded-full bg-white/20 p-1 backdrop-blur sm:h-44 sm:max-w-44 sm:p-3">
            <div className="relative drop-shadow-2">
              <Image
                src={"/images/user/user-06.png"}
                width={160}
                height={160}
                alt="profile"
              />
            </div>
          </div>
          <div className="mt-4">
            <h3 className="mb-1.5 text-2xl font-semibold text-black dark:text-white">
              Warranty Details
            </h3>
          </div>
          <div className="max-w-full overflow-x-auto">
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-gray-2 text-left dark:bg-meta-4">
                  <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                    Product Key
                  </th>
                  <th className="min-w-[250px] py-4 px-4 font-medium text-black dark:text-white">
                    Studio Name
                  </th>
                  <th className="min-w-[180px] py-4 px-4 font-medium text-black dark:text-white">
                    Vehicle Number
                  </th>
                  <th className="min-w-[290px] py-4 px-4 font-medium text-black dark:text-white">
                    Vehicle Chassis No
                  </th>
                  <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                    Start Date
                  </th>
                  <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                    End Date
                  </th>
                  <th className="min-w-[100px] py-4 px-4 font-medium text-black dark:text-white">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {packageData.map((packageItem, key) => (
                  <tr key={key} className="text-start">
                    <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                      <h5 className="font-medium text-black dark:text-white">
                        {packageItem.productkey}
                      </h5>
                      {/* <p className="text-sm">${packageItem.price}</p> */}
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <p className="text-black dark:text-white">
                        {packageItem.studioName}
                      </p>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <p className="text-black dark:text-white">
                        {packageItem.vehNumber}
                      </p>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <p className="text-black dark:text-white">
                        {packageItem.vehChassisNo}
                      </p>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <p className="text-black dark:text-white">
                        {packageItem.startDate}
                      </p>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <p className="text-black dark:text-white">
                        {packageItem.endDate}
                      </p>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <p
                        className={`inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium ${
                          packageItem.status === "Active"
                            ? "text-success bg-success"
                            : packageItem.status === "Unpaid"
                            ? "text-danger bg-danger"
                            : "text-warning bg-warning"
                        }`}
                      >
                        {packageItem.status}
                      </p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default WarrantyDetails;
