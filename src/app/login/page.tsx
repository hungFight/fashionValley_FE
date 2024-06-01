'use client';
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
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
import { CheckboxProps } from 'antd';
import { FaFacebook, FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import SendIcon from '@mui/icons-material/Send';
import { LoadingButton } from '@mui/lab';
import Validation from '../utils/Validation/Validation';
import userAPI from '../restfulAPI/userAPI';
import { navigate } from '../actions';
import { signIn } from 'next-auth/react';

// TODO remove, this demo shouldn't need to reset the theme.
const onChange: CheckboxProps['onChange'] = (e) => {
    console.log(`checked = ${e.target.checked}`);
};
const defaultTheme = createTheme();

export default function SignInSide() {
    const [loading, setLoading] = React.useState<boolean>(false);
    const [err, setErr] = React.useState<{ account: boolean; pass: boolean; status: boolean; message: string; success: boolean }>({
        account: false,
        pass: false,
        status: false,
        message: '',
        success: false,
    });
    const [onEye, setOnEye] = React.useState<boolean>(false);
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);
        const data = new FormData(event.currentTarget),
            account: any = data.get('account'),
            password: any = data.get('password');
        if (!account) setErr((pre) => ({ ...pre, account: true }));
        if (!password || !Validation.validLength(password, 6, 100)) setErr((pre) => ({ ...pre, pass: true }));
        if (account && password) {
            const res = await userAPI.login(account, password);
            if (res?.status === 200) {
                setErr((pre) => ({ ...pre, status: false, message: res.message, success: true }));
                navigate('');
            } else if (res?.status === 300) setErr((pre) => ({ ...pre, status: true, message: res.message }));
            else setErr((pre) => ({ ...pre, status: true, message: 'Encounter error!. Please try again later' }));
        }
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
        setLoading(false);
    };
    const handleSignInFacebook = async () => {
        await signIn('facebook', {
            callbackUrl: window.location.origin,
        });
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
                        <Image src={Images.theme7} alt="Fashion Valley" />
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
                            <Image src={Images.logo} alt="Fashion Valley" />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign in
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                error={err.account}
                                required
                                fullWidth
                                id="account"
                                label="Enter your account"
                                name="account"
                                autoComplete="account"
                                autoFocus
                                onFocus={() => setErr((pre) => ({ ...pre, account: false }))}
                            />
                            <TextField
                                margin="normal"
                                error={err.pass}
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type={`${onEye ? 'text' : 'password'}`}
                                id="password"
                                autoComplete="current-password"
                                onFocus={() => setErr((pre) => ({ ...pre, pass: false }))}
                            />
                            <div className="flex justify-end">
                                <FormControlLabel control={<Checkbox value="showOut" color="primary" onChange={(e) => setOnEye(e.target.checked)} />} label="Show password" />
                            </div>
                            {err.message && <p className={`text-[13px] ${err.status ? 'text-red-500' : 'text-green-500'}`}>{err.message}</p>}
                            <LoadingButton type="submit" loading={loading} disabled={err.success} endIcon={<SendIcon />} variant="contained" sx={{ mt: 3, mb: 2, width: '100%' }} loadingPosition="end">
                                Sign In
                            </LoadingButton>
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
                                    <div className="text-[35px] mr-3 text-[#3333ff] cursor-pointer" onClick={handleSignInFacebook}>
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
