import http from "../utils/http";

class VerifyAPI {
  public sendSMS = async (value: string) => {
    const res = await http
      .post("/verify/sendSMS", { value })
      .then((data) => data.data)
      .catch((err) => console.log(err));
  };
}
// eslint-disable-next-line import/no-anonymous-default-export
export default new VerifyAPI();
