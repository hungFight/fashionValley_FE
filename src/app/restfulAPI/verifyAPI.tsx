import { AxiosError } from 'axios';
import http from '../utils/http';
import errorHandling from '../utils/errorHandling';

class VerifyAPI {
    public sendSMS = async (value: string): Promise<{ phoneEmail: string; id: string }> => {
        return await http
            .post('/verify/sendSMS', { value })
            .then((data) => data.data)
            .catch((error) => {
                const err: any = error as AxiosError;
                return errorHandling(err);
            });
    };
    public verifyOTP = async (value: { phoneEmail: string; id: string; code: string }) => {
        return await http
            .post('/verify/OTP', { ...value })
            .then((data) => data.data)
            .catch((error) => {
                const err: any = error as AxiosError;
                return errorHandling(err);
            });
    };
}
// eslint-disable-next-line import/no-anonymous-default-export
export default new VerifyAPI();
