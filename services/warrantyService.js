import httpservice from "@/config/httpservice";
import { toast } from "react-toastify";

class WarrantyServiceClass {
  createWarranty = async (data) => {
    try {
      const res = await httpservice.post("warranties", data);
      return res;
    } catch (error) {
      toast.error(error?.response?.statusText);
      if (!error?.response?.statusText) toast.error(error?.message);
      console.log(error);
    }
  };

  getallWarranties = async () => {
    try {
      const res = await httpservice.get("warranties");
      return res;
    } catch (error) {
      toast.error(error?.response?.statusText);
      if (!error?.response?.statusText) toast.error(error?.message);
      console.log(error);
    }
  };

  approveWarranty = async (id) => {
    try {
      const res = await httpservice.post(`warranties/${id}`);
      return res;
    } catch (error) {
      toast.error(error?.response?.statusText);
      if (!error?.response?.statusText) toast.error(error?.message);
      console.log(error);
    }
  };

  deleteWarranty = async (id) => {
    try {
      const res = await httpservice.delete(`warranties/${id}`);
      return res;
    } catch (error) {
      toast.error(error?.response?.statusText);
      if (!error?.response?.statusText) toast.error(error?.message);
      console.log(error);
    }
  };

  getWarranty = async (id) => {
    try {
      const res = await httpservice.get(`warranties/${id}`);
      return res;
    } catch (error) {
      toast.error(error?.response?.statusText);
      if (!error?.response?.statusText) toast.error(error?.message);
      console.log(error);
    }
  };
}

export const WarrantyService = new WarrantyServiceClass();
