import * as React from "react";

import VerifyOTP from "@/app/components/FormOTP";

const VerifyReset = () => {
  return <VerifyOTP cate={{ id: "reset", name: "Reset password" }} />;
};
export default VerifyReset;
