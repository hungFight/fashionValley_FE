import { getCookie } from '@/app/actions';
import Register from '@/components/Register';

const SignUpSide: React.FC<{ params: { code: string } }> = async ({ params }) => {
    const accountValue = await getCookie('asdf_'),
        data = accountValue?.value ? JSON.parse(accountValue?.value) : accountValue?.value;

    return <Register code={params.code} accountValue={data} />;
};
export default SignUpSide;
