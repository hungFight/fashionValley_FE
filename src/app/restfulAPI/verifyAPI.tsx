import http from "../utils/http";

class VerifyAPI {
  public sendSMS = async (value: string) => {
    return await http
      .post("/verify/sendSMS", { value })
      .then((data) => data.data)
      .catch((err) => err);
  };
}
// eslint-disable-next-line import/no-anonymous-default-export
export default new VerifyAPI();
