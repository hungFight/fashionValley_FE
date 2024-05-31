import { AxiosError } from 'axios';
import errorHandling from '../utils/errorHandling';
import http from '../utils/http';

class UserAPI {
    public register = async (data: { userName: FormDataEntryValue; password: FormDataEntryValue; account: string | undefined; code: string; subPassword?: FormDataEntryValue | null }) => {
        try {
            const res = await http.post<{ status: 0 | 200 | 400 | 300; message: string }>('user/register', data);
            return res.data;
        } catch (error) {
            const err: any = error as AxiosError;
            return errorHandling(err);
        }
    };
    public login = async (account: string, password: string) => {
        try {
            const res = await http.post<{ status: 0 | 200 | 400 | 300; message: string }>('user/login', { account, password });
            return res.data;
        } catch (error) {
            const err: any = error as AxiosError;
            return errorHandling(err);
        }
    };
    public resetPassword = async (data: { account: FormDataEntryValue; password: FormDataEntryValue; subPass: boolean; code: string }) => {
        try {
            const res = await http.post<{ status: 0 | 200 | 400 | 300; message: string }>('user/resetPassword', data);
            return res.data;
        } catch (error) {
            const err: any = error as AxiosError;
            return errorHandling(err);
        }
    };
}
// eslint-disable-next-line import/no-anonymous-default-export
export default new UserAPI();
