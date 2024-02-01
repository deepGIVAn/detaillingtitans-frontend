import axios from "@/config/httpservice";
import { toast } from "react-toastify";

class AuthServiceClass {
  login = async ({ email, password }) => {
    try {
      const data = await axios.post("/auth/", { email, password });
      toast.success("Logged In Successfully!!");
      return data;
    } catch (err) {
      toast.error(err?.response?.statusText);
      console.log(err);
    }
  };
}

export const AuthService = new AuthServiceClass();
