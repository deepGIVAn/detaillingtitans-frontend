import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DownloadIcon from "@/public/svg/tables/download.svg";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Form Layout Page | Next.js E-commerce Dashboard Template",
  description: "This is Form Layout page for TailAdmin Next.js",
};

const FormLayout = () => {
  return (
    <>
      <Breadcrumb pageName="Studio Details" />

      <div className="grid grid-cols-1 gap-9 sm:grid-cols-1">
        <div className="flex flex-col gap-9">
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                Detailing Titans Studio Details
              </h3>
            </div>
            <div className="p-6.5">
              <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                <div className="w-full xl:w-1/2">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Full Name <span className="text-meta-1">*</span>
                  </label>
                  <input
                    disabled
                    type="text"
                    placeholder="Enter Full Name"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                </div>

                <div className="w-full xl:w-1/2">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Email Address <span className="text-meta-1">*</span>
                  </label>
                  <input
                    disabled
                    type="text"
                    placeholder="Enter Email Address"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                </div>

                <div className="w-full xl:w-1/2">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Mobile Number <span className="text-meta-1">*</span>
                  </label>
                  <input
                    disabled
                    type="text"
                    placeholder="Enter Mobile Number"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                </div>
              </div>

              <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                <div className="w-full xl:w-1/2">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Address <span className="text-meta-1">*</span>
                  </label>
                  <input
                    disabled
                    type="text"
                    placeholder="Enter Address"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                </div>

                <div className="w-full xl:w-1/2">
                  <label className="mb-2.5 block text-black dark:text-white">
                    City <span className="text-meta-1">*</span>
                  </label>
                  <input
                    disabled
                    type="text"
                    placeholder="Enter City"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                </div>

                <div className="w-full xl:w-1/2">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Pincode <span className="text-meta-1">*</span>
                  </label>
                  <input
                    disabled
                    type="text"
                    placeholder="Enter Pincode"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                </div>
              </div>

              <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                <div className="w-full xl:w-1/2">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Register Company Name
                  </label>
                  <input
                    disabled
                    type="text"
                    placeholder="Enter Register Company Name"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                </div>

                <div className="w-full xl:w-1/2">
                  <label className="mb-2.5 block text-black dark:text-white">
                    GST Number
                  </label>
                  <input
                    disabled
                    type="text"
                    placeholder="Enter GST Number"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                </div>

                <div className="w-full xl:w-1/2">
                  <label className="mb-3 block text-black dark:text-white">
                    GST Number{" "}
                    <span className="text-black-2 text-sm dark:text-white">
                      ( Upload Doc )
                    </span>{" "}
                    <span className="text-meta-1">*</span>
                  </label>
                  <div className="flex flex-wrap items-center py-3 px-5">
                    <div>GST Doc</div>
                    <div className="ms-2">
                      <Image
                        src={DownloadIcon}
                        alt="image"
                        height={18}
                        width={18}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                <div className="w-full xl:w-1/2">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Pan Card <span className="text-meta-1">*</span>
                  </label>
                  <input
                    disabled
                    type="text"
                    placeholder="Enter Pan Number"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                </div>

                <div className="w-full xl:w-1/2">
                  <label className="mb-3 block text-black dark:text-white">
                    Pan Card{" "}
                    <span className="text-black-2 text-sm dark:text-white">
                      ( Upload Photo )
                    </span>{" "}
                    <span className="text-meta-1">*</span>
                  </label>
                  <div className="flex flex-wrap items-center py-3 px-5">
                    <div>GST Doc</div>
                    <div className="ms-2">
                      <Image
                        src={DownloadIcon}
                        alt="image"
                        height={18}
                        width={18}
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full xl:w-1/2">
                  <label className="mb-3 block text-black dark:text-white">
                    Studio{" "}
                    <span className="text-black-2  text-sm dark:text-white">
                      ( Upload Photo )
                    </span>{" "}
                    <span className="text-meta-1">*</span>
                  </label>
                  <div className="flex flex-wrap items-center py-3 px-5">
                    <div>GST Doc</div>
                    <div className="ms-2">
                      <Image
                        src={DownloadIcon}
                        alt="image"
                        height={18}
                        width={18}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                <div className="w-full xl:w-1/2">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Aadhar Card <span className="text-meta-1">*</span>
                  </label>
                  <input
                    disabled
                    type="text"
                    placeholder="Enter Aadhar Number"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                </div>

                <div className="w-full xl:w-1/2">
                  <label className="mb-3 block text-black dark:text-white">
                    Aadhar Card{" "}
                    <span className="text-black-2 text-sm dark:text-white">
                      ( Upload Photo )
                    </span>{" "}
                    <span className="text-meta-1">*</span>
                  </label>
                  <div className="flex flex-wrap items-center py-3 px-5">
                    <div>GST Doc</div>
                    <div className="ms-2">
                      <Image
                        src={DownloadIcon}
                        alt="image"
                        height={18}
                        width={18}
                      />
                    </div>
                  </div>
                </div>

                <div className="w-full xl:w-1/2">
                  <label className="mb-3 block text-black dark:text-white">
                    User{" "}
                    <span className="text-black-2 text-sm dark:text-white">
                      ( Upload Photo )
                    </span>{" "}
                    <span className="text-meta-1">*</span>
                  </label>
                  <div className="flex flex-wrap items-center py-3 px-5">
                    <div>GST Doc</div>
                    <div className="ms-2">
                      <Image
                        src={DownloadIcon}
                        alt="image"
                        height={18}
                        width={18}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <label className="mb-2.5 block text-black dark:text-white">
                  Comments
                </label>
                <textarea
                  disabled
                  rows={4}
                  placeholder="Type your comments"
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormLayout;
