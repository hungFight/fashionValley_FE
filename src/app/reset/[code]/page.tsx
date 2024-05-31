import { getCookie } from '@/app/actions';
import Register from '@/app/components/Register';
import ResetPassword from '@/app/components/ResetPassword';
import PhoneInput from 'react-phone-input-2';

const ResetPasswordSide: React.FC<{ params: { code: string } }> = async ({ params }) => {
    const accountValue = await getCookie('asdf_'),
        data = accountValue?.value ? JSON.parse(accountValue?.value) : accountValue?.value;

    return <ResetPassword code={params.code} accountValue={data} />;
};
export default ResetPasswordSide;
