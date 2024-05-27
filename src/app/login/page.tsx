"use client";
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Images from "../assets/images";
import Image from "next/image";
import { Col, Row } from "antd";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignInSide() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={4}
          sx={{
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
          }}
          style={{ position: "relative" }}
        >
          <div className="w-full h-full absolute top-0 left-0">
            <Image
              src={Images.theme7}
              alt="Fashion Valley"
              objectFit="cover" // Ensures the image covers the grid item without stretching
            />
          </div>
        </Grid>
        <Grid item xs={12} sm={8} md={4} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar
              sx={{
                m: 0,
                width: "50px",
                height: "50px",
                bgcolor: "secondary.main",
              }}
            >
              <Image src={Images.theme8} alt="Fashion Valley" />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/register" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <div className="w-full mt-7 flex justify-center flex-wrap">
                <p>Sign in with your other accounts</p>
                <div className="w-full mt-7 flex justify-center">
                  <div className="text-[35px] mr-3 text-[#3333ff] cursor-pointer">
                    <FaFacebook />
                  </div>
                  <div className="text-[38px] mr-3 cursor-pointer">
                    <FcGoogle />
                  </div>
                  <div className="text-[35px] mr-3 cursor-pointer">
                    <FaGithub />
                  </div>
                </div>
              </div>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={false}
          sm={2}
          md={4}
          sx={{
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
          }}
          style={{ position: "relative" }}
        >
          <div className="w-full h-full  absolute top-0 left-0">
            <Image
              src={Images.theme6}
              alt="Fashion Valley"
              objectFit="cover" // Ensures the image covers the grid item without stretching
            />
          </div>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
