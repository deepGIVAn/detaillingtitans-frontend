import httpservice from "@/config/httpservice";
import TokenHelper from "@/helpers/Token.helper";
import { toast } from "react-toastify";

class AuthServiceClass {
  login = async ({ email, password }) => {
    try {
      const data = await httpservice.post("auth", { email, password });
      toast.success("Logged In Successfully!!");
      return data;
    } catch (error) {
      toast.error(error?.response?.statusText);
      if (!error?.response?.statusText) toast.error(error?.message);
      console.log(error);
    }
  };

  logout = async () => {
    try {
      TokenHelper.deleteToken();
      TokenHelper.deleteUser();
      TokenHelper.deleteRole();
      toast.success("Logged out successfully!!");
      return true;
    } catch (error) {
      toast.error("Failed to Log Out!");
      console.log(error);
      return false;
    }
  };
}

export const AuthService = new AuthServiceClass();
