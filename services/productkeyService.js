import httpservice from "@/config/httpservice";
import { toast } from "react-toastify";

class KeyServiceClass {
  getKey = async (key) => {
    try {
      const res = await httpservice.get(`productkeys/${key}`);
      return res;
    } catch (error) {
      toast.error(error?.response?.statusText);
      if (!error?.response?.statusText) toast.error(error?.message);
      console.log(error);
    }
  };
}

export const KeyService = new KeyServiceClass();
