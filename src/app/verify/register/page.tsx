import * as React from "react";

import { createTheme } from "@mui/material/styles";
import VerifyOTP from "@/app/components/FormOTP";

const VerifyRegister = () => {
  return <VerifyOTP cate={{ id: "register", name: "Sign up" }} />;
};

export default VerifyRegister;
