'use client';
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Images from '../assets/images';
import Image from 'next/image';
import { CheckboxProps, Col, Row } from 'antd';
import { FaFacebook, FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import Validation from '../utils/Validation/Validation';
import { MuiTelInput } from 'mui-tel-input';
import userAPI from '../restfulAPI/userAPI';
const defaultTheme = createTheme();

const ResetPassword: React.FC<{ code: string; accountValue?: { phoneEmail: string; id: String } }> = ({ code, accountValue }) => {
    const [status, setStatus] = React.useState<{ code: boolean; message: string; disable: boolean } | undefined>();
    const [onEye, setOnEye] = React.useState<boolean>(false);
    const [subPass, setSubPass] = React.useState<boolean>(false);
    const [err, setErr] = React.useState<{ account: boolean; pass: boolean; re: boolean }>({ account: false, pass: false, re: false });
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget),
            reType = data.get('reType'),
            password: any = data.get('password');
        if (!reType || reType !== password) setErr((pre) => ({ ...pre, re: true }));
        if (!password || !Validation.validLength(password, 6, 100)) setErr((pre) => ({ ...pre, pass: true }));
        if (accountValue?.phoneEmail && password && reType === password && !status?.disable) {
            if (Validation.validPhoneNumber(accountValue?.phoneEmail) || Validation.validEmail(accountValue?.phoneEmail)) {
                const res = await userAPI.resetPassword({ account: accountValue?.phoneEmail, password, subPass, code });
                if (res)
                    if (res?.status === 1) setStatus({ code: true, message: res.message, disable: true });
                    else setStatus({ code: false, message: res.message, disable: false });
                else setStatus({ code: false, message: 'create failed!', disable: false });
            } else setErr((pre) => ({ ...pre, account: true }));
        }
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={4}
                    sx={{
                        backgroundColor: (t) => (t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900]),
                    }}
                    style={{ position: 'relative' }}
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
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar
                            sx={{
                                m: 0,
                                width: '50px',
                                height: '50px',
                                bgcolor: 'secondary.main',
                            }}
                        >
                            <Image src={Images.theme8} alt="Fashion Valley" />
                        </Avatar>
                        <Typography component="h5" variant="h5">
                            Reset your password
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                            {!Validation.validPhoneNumber(accountValue?.phoneEmail) ? (
                                <TextField
                                    margin="normal"
                                    required
                                    error={err.account}
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    disabled={true}
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
                                    value={accountValue?.phoneEmail}
                                />
                            ) : (
                                <MuiTelInput value={accountValue?.phoneEmail} error={err.account} defaultCountry="VN" disabled={true} />
                            )}
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                error={err.pass}
                                name="password"
                                label={subPass ? 'Extra password' : 'Password'}
                                type={`${onEye ? 'text' : 'password'}`}
                                onFocus={() => setErr((pre) => ({ ...pre, pass: false }))}
                                id="password"
                                autoComplete="current-password"
                            />
                            <TextField
                                margin="normal"
                                required
                                error={err.re}
                                fullWidth
                                name="reType"
                                label={subPass ? 'Enter extra password again' : 'Enter password again'}
                                type={`${onEye ? 'text' : 'password'}`}
                                onFocus={() => setErr((pre) => ({ ...pre, re: false }))}
                                id="reType"
                                autoComplete="current-password"
                            />
                            <div className="flex justify-between">
                                <FormControlLabel control={<Checkbox value="showOut" color="primary" onChange={(e) => setSubPass(e.target.checked)} />} label="Change Extra password" />
                                <FormControlLabel control={<Checkbox value="showOut" color="primary" onChange={(e) => setOnEye(e.target.checked)} />} label="Show password" />
                            </div>

                            <Button type="submit" disabled={status?.disable} fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                                Save your innovation
                            </Button>
                            {status && <p className={`text-[13px] mt-[-8px] ${status.code ? 'text-green-500' : 'text-red-500'}`}>{status?.message}</p>}
                            <Grid container>
                                <Grid item xs>
                                    <Link href="/verify/reset" variant="body2">
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
                        backgroundColor: (t) => (t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900]),
                    }}
                    style={{ position: 'relative' }}
                >
                    <div className="w-full h-full  absolute top-0 left-0">
                        <Image src={Images.theme6} alt="Fashion Valley" />
                    </div>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
};

export default ResetPassword;
