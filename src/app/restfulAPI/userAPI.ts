import { AxiosError } from 'axios';
import errorHandling from '../utils/errorHandling';
import http from '../utils/http';

class UserAPI {
    public register = async (data: { userName: FormDataEntryValue; password: FormDataEntryValue; account: string | undefined; subPassword?: FormDataEntryValue | null }) => {
        try {
            const res = await http.post<{ status: 0 | 1 | 2 | 3; message: string }>('user/register', data);
            return res.data;
        } catch (error) {
            const err: any = error as AxiosError;
            return errorHandling(err);
        }
    };
}
// eslint-disable-next-line import/no-anonymous-default-export
export default new UserAPI();
