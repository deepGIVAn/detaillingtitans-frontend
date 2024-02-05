import httpservice from "@/config/httpservice";
import { toast } from "react-toastify";

class StudioServiceClass {
  createStudio = async (data) => {
    try {
      const res = await httpservice.post("studios", data);
      return res;
    } catch (error) {
      toast.error(error?.response?.statusText);
      if (!error?.response?.statusText) toast.error(error?.message);
      console.log(error);
    }
  };

  getallStudios = async () => {
    try {
      const res = await httpservice.get("studios");
      return res;
    } catch (error) {
      toast.error(error?.response?.statusText);
      if (!error?.response?.statusText) toast.error(error?.message);
      console.log(error);
    }
  };

  deleteStudio = async (id) => {
    try {
      const res = await httpservice.delete(`studios/${id}`);
      return res;
    } catch (error) {
      toast.error(error?.response?.statusText);
      if (!error?.response?.statusText) toast.error(error?.message);
      console.log(error);
    }
  };

  approveStudio = async (id) => {
    try {
      const res = await httpservice.post(`studios/${id}`);
      return res;
    } catch (error) {
      toast.error(error?.response?.statusText);
      if (!error?.response?.statusText) toast.error(error?.message);
      console.log(error);
    }
  };

  getStudio = async (id) => {
    try {
      const res = await httpservice.get(`studios/${id}`);
      return res;
    } catch (error) {
      toast.error(error?.response?.statusText);
      if (!error?.response?.statusText) toast.error(error?.message);
      console.log(error);
    }
  };
}

export const StudioService = new StudioServiceClass();
