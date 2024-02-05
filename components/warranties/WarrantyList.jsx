"use client";
import { Package } from "@/types/package";

import * as React from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import Actions from "./Actions";
import { WarrantyService } from "@/services/warrantyService";
import { toast } from "react-toastify";

const columns = [
  { field: "id", headerName: "S.No.", width: 80 },
  { field: "productkey", headerName: "Product Key", width: 200 },
  { field: "name", headerName: "Name", width: 200 },
  { field: "email", headerName: "Email", width: 200 },
  {
    field: "mobile",
    headerName: "Mobile",
    width: 150,
  },
  { field: "vehNumber", headerName: "Vehicle Number", width: 150 },
  { field: "vehChasNumber", headerName: "Vehicle Chassis No", width: 250 },
  { field: "status", headerName: "Status", width: 100 },
  {
    field: "action",
    headerName: "Action",
    width: 100,
    renderCell: (params) => <>{params.row.action}</>,
  },
];

// const rows = [
//   {
//     id: 1,
//     productkey: "TPUOM10008400934108",
//     name: "Doon Nursing Home",
//     email: "kunalgoel736@gmail.com",
//     mobile: "9319979805",
//     vehNumner: "UK07FR8125",
//     vehChasNumber: "MBJABBAFX01703315~1123",
//     status: "Approved",
//     action: <Actions />,
//   },
// ];

const WarrantyList = () => {
  const [rows, setRows] = React.useState([]);
  const [deleteclick, setDeleteclick] = React.useState(null);
  const [approveclick, setApproveclick] = React.useState(null);

  React.useEffect(() => {
    if (deleteclick) {
      WarrantyService.deleteWarranty(deleteclick).then(() => {
        toast.success("Warranty Deleted!!");
        setDeleteclick(null);
      });
    }
    if (approveclick) {
      WarrantyService.approveWarranty(approveclick).then(() => {
        toast.success("Studio Approved");
        setApproveclick(null);
      });
    }

    const getWarranties = async () => {
      const res = await WarrantyService.getallWarranties();
      console.log(res?.data);
      const result = res?.data.map((warranty, index) => {
        return {
          id: index + 1,
          productkey: warranty?.productkey?.productkey,
          name: warranty?.name,
          email: warranty?.email,
          mobile: warranty?.mobile,
          vehNumber: warranty?.vehicle_number,
          vehChasNumber: warranty?.vehicle_chassi_no,
          status: warranty?.productkey?.status ? "Approved" : "Pending",
          action: (
            <Actions
              id={warranty?._id}
              status={warranty?.productkey?.status}
              setApproveclick={setApproveclick}
              setDeleteclick={setDeleteclick}
            />
          ),
        };
      });
      setRows(result || []);
    };
    getWarranties();
  }, [deleteclick, approveclick]);

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
