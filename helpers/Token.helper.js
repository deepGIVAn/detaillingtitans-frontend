class TokenHelperClass {
  constructor() {
    this.accessToken = "panel-token";
    this.user = "user";
  }
  getToken = () => {
    if (typeof window !== "undefined")
      return localStorage.getItem(this.accessToken);
  };
  createToken = (token) => {
    if (typeof window !== "undefined")
      return localStorage.setItem(this.accessToken, token);
  };
  deleteToken = () => {
    if (typeof window !== "undefined")
      return localStorage.removeItem(this.accessToken);
  };
  getUser = () => {
    if (typeof window !== "undefined") return localStorage.getItem(this.user);
  };
  createUser = (id) => {
    if (typeof window !== "undefined")
      return localStorage.setItem(this.user, id);
  };
  deleteUser = () => {
    if (typeof window !== "undefined")
      return localStorage.removeItem(this.user);
  };
}

const TokenHelper = new TokenHelperClass();
export default TokenHelper;
