import * as React from 'react';
import { cookies } from 'next/headers';
import VerifyOTP from '@/app/components/FormOTP';

const VerifyRegister = () => {
    const cookieStore = cookies();
    const asdf_: any = cookieStore.get('asdf_');
    console.log(asdf_, 'asdf_');

    return <VerifyOTP cate={{ id: 'register', name: 'Sign up' }} asdf_={asdf_?.value ? JSON.parse(asdf_.value) : undefined} />;
};

export default VerifyRegister;
