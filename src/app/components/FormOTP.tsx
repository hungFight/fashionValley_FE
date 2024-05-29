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
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { useRef } from 'react';
import verify from '../restfulAPI/verifyAPI';
import verifyAPI from '../restfulAPI/verifyAPI';
import Validation from '../utils/Validation/Validation';
import { navigate } from '../actions';

// TODO remove, this demo shouldn't need to reset the theme.
const onChange: CheckboxProps['onChange'] = (e) => {
    console.log(`checked = ${e.target.checked}`);
};
const defaultTheme = createTheme();

const VerifyOTP: React.FC<{
    cate: { id: 'reset' | 'register'; name: string };
    asdf_?: {
        phoneEmail: string;
        id: string;
    };
}> = ({ cate, asdf_ }) => {
    const [verify, setVerify] = React.useState<
        | {
              phoneEmail: string;
              id: string;
          }
        | undefined
    >(asdf_); // phone or email
    const [code, setCode] = React.useState<string>('');

    const [phoneEmail, setPhoneEmail] = React.useState<boolean>(true); // true is email
    const [valuePhone, setValuePhone] = React.useState('');
    const [valueEmail, setValueEmail] = React.useState('');

    const [valid, setValid] = React.useState<{ code: boolean; phone: boolean }>({ code: false, phone: false });
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        if (verify) {
            if (!Validation.validOTP(code)) setValid((pre) => ({ ...pre, code: true }));
            if (verify?.phoneEmail && Validation.validUUID(verify.id)) {
                const res = await verifyAPI.verifyOTP({ ...verify, code });
                if (Validation.validUUID(res)) {
                    navigate(res);
                }
            }
        } else {
            if (!phoneEmail) {
                if (Validation.validPhoneNumber(valuePhone)) {
                    const res = await verifyAPI.sendSMS(valuePhone);
                    if (res) {
                        setVerify(res);
                    }
                } else setValid((pre) => ({ ...pre, phone: true }));
            }
        }
    };

    const handleChange = (newValue: React.SetStateAction<string>, data: any) => {
        setValuePhone(newValue);
    };
    const handleCode = (e: any) => {
        if (e.target.value.length < 7) setCode(e.target.value);
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
                        <Image src={Images.theme2} alt="Fashion Valley" />
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
                                m: 2,
                                width: '50px',
                                height: '50px',
                                bgcolor: 'secondary.main',
                            }}
                        >
                            <Image src={Images.theme8} alt="Fashion Valley" />
                        </Avatar>
                        <Typography component="div" variant="body2">
                            <h1 className="text-lg font-medium  x">Validation for {cate.name}</h1>
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                            {verify ? (
                                <TextField
                                    margin="normal"
                                    error={valid.code}
                                    required
                                    fullWidth
                                    id="code"
                                    label="Enter OTP code 6 characters"
                                    name="code"
                                    autoComplete="code"
                                    autoFocus
                                    onFocus={() => setValid((pre) => ({ ...pre, code: false }))}
                                    type="number"
                                    value={code}
                                    onChange={handleCode}
                                />
                            ) : phoneEmail ? (
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email address"
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
                                    value={valueEmail}
                                    onChange={(e) => setValueEmail(e.target.value)}
                                />
                            ) : (
                                <div className="h-[70px]">
                                    <PhoneInput
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
                                        value={valuePhone}
                                        onFocus={() => setValid((pre) => ({ ...pre, phone: false }))}
                                        onChange={handleChange}
                                    />
                                    {valid.phone && <p className="text-[12px] text-red-400">Invalid phone number. Please try again</p>}
                                </div>
                            )}
                            {!verify && <FormControlLabel control={<Checkbox value="showOut" color="primary" onChange={(e) => setPhoneEmail(!e.target.checked)} />} label="Phone number" />}
                            <Button type="submit" fullWidth variant="contained" sx={{ mt: 1, mb: 2 }}>
                                {verify ? 'SEND OTP code' : 'Get OTP code'}
                            </Button>
                            {!verify && (
                                <Grid container>
                                    <Grid item>
                                        <Link href="/login" variant="body2">
                                            Already have an account? Sign in
                                        </Link>
                                    </Grid>
                                </Grid>
                            )}
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
                        <Image src={Images.theme5} alt="Fashion Valley" />
                    </div>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
};
export default VerifyOTP;
