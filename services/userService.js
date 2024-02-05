import httpservice from "@/config/httpservice";
import { toast } from "react-toastify";

class UserServiceClass {
  createUser = async (data) => {
    try {
      const res = await httpservice.post("users", data);
      return res;
    } catch (error) {
      toast.error(error?.response?.statusText);
      if (!error?.response?.statusText) toast.error(error?.message);
      console.log(error);
    }
  };
}

export const UserService = new UserServiceClass();
