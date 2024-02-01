"use client";
import { Package } from "@/types/package";

import * as React from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import ViewIcon from "@/public/svg/tables/view.svg";
import DeleteIcon from "@/public/svg/tables/delete.svg";
import Image from "next/image";

const Actions = () => {
  return (
    <>
      {" "}
      <div className="flex flex-row items-center justify-evenly w-full">
        <button className="hover:text-primary">
          <Image src={ViewIcon} alt="icon" width={18} height={18} />
        </button>
        <button className="hover:text-danger">
          <Image src={DeleteIcon} alt="icon" width={18} height={18} />
        </button>
      </div>
    </>
  );
};

const columns: GridColDef[] = [
  { field: "id", headerName: "S.No.", width: 80 },
  { field: "productkey", headerName: "Product Key", width: 200 },
  { field: "name", headerName: "Name", width: 200 },
  { field: "email", headerName: "Email", width: 200 },
  {
    field: "mobile",
    headerName: "Mobile",
    width: 150,
  },
  { field: "vehNumner", headerName: "Vehicle Number", width: 150 },
  { field: "vehChasNumber", headerName: "Vehicle Chassis No", width: 250 },
  { field: "status", headerName: "Status", width: 100 },
  {
    field: "action",
    headerName: "Action",
    width: 100,
    renderCell: (params) => <>{params.row.action}</>,
  },
];

const rows = [
  {
    id: 1,
    productkey: "TPUOM10008400934108",
    name: "Doon Nursing Home",
    email: "kunalgoel736@gmail.com",
    mobile: "9319979805",
    vehNumner: "UK07FR8125",
    vehChasNumber: "MBJABBAFX01703315~1123",
    status: "Approved",
    action: <Actions />,
  },
];

const WarrantyList = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark  sm:px-7.5 xl:pb-5">
      <div
        // style={{ height: 400, width: "100%" }}
        className="max-w-full overflow-x-auto"
      >
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          //   checkboxSelection
          disableColumnMenu={true}
        />
      </div>
    </div>
  );
};

export default WarrantyList;
