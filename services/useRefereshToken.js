"use client";

import axios from "../config/httpservice";

const useRefreshToken = () => {
  const refresh = async () => {
    const response = await axios.get("/auth/refresh", {
      withCredentials: true,
    });
    console.log(response);
    return response?.data?.accessToken;
  };
  return refresh;
};

export default useRefreshToken;
