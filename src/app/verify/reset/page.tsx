import * as React from 'react';
import VerifyOTP from '@/components/FormOTP';
import { cookies } from 'next/headers';

const VerifyReset = () => {
    const cookieStore = cookies();
    const asdf_: any = cookieStore.get('asdf_');
    return <VerifyOTP cate={{ id: 'reset', name: 'Reset password' }} asdf_={asdf_?.value ? JSON.parse(asdf_.value) : undefined} />;
};
export default VerifyReset;
