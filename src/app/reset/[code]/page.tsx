import { getCookie } from '@/app/actions';
import ResetPassword from '@/components/ResetPassword';

const ResetPasswordSide: React.FC<{ params: { code: string } }> = async ({ params }) => {
    const accountValue = await getCookie('asdf_'),
        data = accountValue?.value ? JSON.parse(accountValue?.value) : accountValue?.value;

    return <ResetPassword code={params.code} accountValue={data} />;
};
export default ResetPasswordSide;
