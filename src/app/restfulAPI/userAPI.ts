import { AxiosError } from 'axios';
import errorHandling from '../utils/errorHandling';
import http from '../utils/http';

class UserAPI {
    public register = async (data: { userName: string; password: string; phone: string; email: string; subPassword: string }) => {
        try {
            const res = await http.post('user/register');
        } catch (error) {
            const err: any = error as AxiosError;
            return errorHandling(err);
        }
    };
}
// eslint-disable-next-line import/no-anonymous-default-export
export default new UserAPI();
