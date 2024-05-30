'use client';
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Paper } from '@mui/material';
import Image from 'next/image';
import Cookies from 'js-cookie';
import Validation from '@/app/utils/Validation/Validation';
import PhoneInput from 'react-phone-input-2';
import userAPI from '@/app/restfulAPI/userAPI';
import Images from '../assets/images';
import { MuiTelInput } from 'mui-tel-input';
// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

const Register: React.FC<{ code: string; accountValue?: { phoneEmail: string; id: String } }> = ({ code, accountValue }) => {
    const [status, setStatus] = React.useState<{ code: boolean; message: string } | undefined>();
    const [onEye, setOnEye] = React.useState<boolean>(false);
    const [extra, setExtra] = React.useState<boolean>(false);
    const [valid, setValid] = React.useState<{
        account: boolean;
        password: boolean;
        reTypePassword: boolean;
        userName: boolean;
        subPassword: boolean;
    }>({
        password: false,
        userName: false,
        reTypePassword: false,
        account: false,
        subPassword: false,
    });
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget),
            password = data.get('password'),
            userName = data.get('userName'),
            account = accountValue?.phoneEmail,
            subPassword = data.get('subPassword');
        const fullData = {
            account: !account,
            password: !password,
            reTypePassword: !data.get('reType') || data.get('reType') !== password,
            userName: !userName,
            subPassword: !subPassword,
        };
        console.log(fullData, 'fullData', account, userName, password, subPassword);

        if (account && password && userName && !fullData.account && !fullData.password && !fullData.userName && !fullData.reTypePassword && data.get('reType') === password) {
            const res = await userAPI.register({ userName, password, account, subPassword });
            if (res)
                if (res?.status === 1) setStatus({ code: true, message: res.message });
                else setStatus({ code: false, message: res.message });
            else setStatus({ code: false, message: 'create failed!' });
        } else {
            setValid(fullData);
        }
    };
    console.log(valid, accountValue, 'accountValue');

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
                    <div className="w-full h-full absolute top-0 left-0 flex">
                        <Image src={Images.theme9} alt="Fashion Valley" />
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
                                m: 1,
                                bgcolor: 'secondary.main',
                                width: '50px',
                                height: '50px',
                            }}
                        >
                            <Image src={Images.theme8} alt="Fashion Valley" />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign up
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={Validation.validPhoneNumber(accountValue?.phoneEmail) ? 6 : 12}>
                                    <TextField
                                        required
                                        error={valid.userName}
                                        onFocus={() => setValid((pre) => ({ ...pre, userName: false }))}
                                        fullWidth
                                        id="userName"
                                        label="User Name"
                                        name="userName"
                                        autoComplete="family-name"
                                    />{' '}
                                </Grid>{' '}
                                {!Validation.validPhoneNumber(accountValue?.phoneEmail) ? (
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            error={valid.account}
                                            onFocus={() => setValid((pre) => ({ ...pre, email: false }))}
                                            fullWidth
                                            value={accountValue?.phoneEmail}
                                            id="email"
                                            name="email"
                                            autoComplete="email"
                                            disabled={true}
                                        />
                                    </Grid>
                                ) : (
                                    <Grid item xs={12} sm={6}>
                                        <MuiTelInput value={accountValue?.phoneEmail} defaultCountry="VN" disabled={true} />
                                        {/* <PhoneInput
                                            country={'vn'}
                                            isValid={(value, country: any, countries: any) => {
                                                if (countries.some((cou: any) => value.match(cou.countryCode)) || !valid.phone) return true;
                                                return false;
                                            }}
                                            inputStyle={{
                                                width: '100%',
                                                paddingLeft: '58px',
                                                height: '100%',
                                            }}
                                            containerStyle={{ height: '50px' }}
                                            buttonStyle={{
                                                width: '50px',
                                                display: 'flex',
                                                justifyContent: 'center',
                                            }}
                                            value={accountValue?.phoneEmail}
                                            disabled={true}
                                        /> */}
                                    </Grid>
                                )}
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        error={valid.password}
                                        onFocus={() => setValid((pre) => ({ ...pre, password: false }))}
                                        fullWidth
                                        name="password"
                                        label="Password"
                                        type={`${onEye ? 'text' : 'password'}`}
                                        id="password"
                                        autoComplete="new-password"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        error={valid.reTypePassword}
                                        onFocus={() => setValid((pre) => ({ ...pre, reTypePassword: false }))}
                                        fullWidth
                                        name="reType"
                                        label="Enter password again"
                                        type={`${onEye ? 'text' : 'password'}`}
                                        id="reType"
                                        autoComplete="old-password"
                                    />
                                </Grid>
                                {extra && (
                                    <Grid item xs={12}>
                                        <TextField
                                            fullWidth
                                            error={valid.subPassword}
                                            onFocus={() => setValid((pre) => ({ ...pre, subPassword: false }))}
                                            name="subPassword"
                                            label="Enter extra password"
                                            type={`${onEye ? 'text' : 'password'}`}
                                            id="reType"
                                            autoComplete="extra-password"
                                        />
                                    </Grid>
                                )}
                                <Grid item xs={12}>
                                    <div className="flex justify-between">
                                        <FormControlLabel control={<Checkbox value="subPassword" color="primary" onChange={(e) => setExtra(e.target.checked)} />} label="Extra password" />
                                        <FormControlLabel control={<Checkbox value="showOut" color="primary" onChange={(e) => setOnEye(e.target.checked)} />} label="Show password" />
                                    </div>
                                </Grid>
                            </Grid>
                            <Button type="submit" disabled={status?.code} fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                                Sign Up
                            </Button>
                            {status && <p className={`text-[13px] mt-[-8px] ${status.code ? 'text-green-500' : 'text-red-500'}`}>{status?.message}</p>}
                            <Grid container justifyContent="flex-end">
                                <Grid item>
                                    <Link href="/login" style={{ color: '#1976d2', textDecoration: 'none' }}>
                                        Already have an account? Sign in
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Grid>{' '}
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
                    <div className="w-full h-full absolute top-0 left-0 flex">
                        <Image src={Images.theme4} alt="Fashion Valley" />
                    </div>
                </Grid>
            </Grid>
            {/* <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField autoComplete="given-name" name="firstName" required fullWidth id="firstName" label="First Name" autoFocus />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField required fullWidth id="lastName" label="Last Name" name="lastName" autoComplete="family-name" />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField required fullWidth id="email" label="Email Address" name="email" autoComplete="email" />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField required fullWidth name="password" label="Password" type="password" id="password" autoComplete="new-password" />
                            </Grid>
                        </Grid>
                        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                            Sign Up
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <LinkD to="/login" style={{ color: '#1976d2', textDecoration: 'none' }}>
                                    Already have an account? Sign in
                                </LinkD>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container> */}
        </ThemeProvider>
    );
};
export default Register;
