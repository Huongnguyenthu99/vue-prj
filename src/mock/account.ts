import { resultSuccess } from './util';
import { MockMethod } from 'vite-plugin-mock';

const userInfo = {
    name: 'vben',
    userId: '0000000000',
    email: 'test@gmail.com',
    signature: 'test',
    tags: [
        {
            key: '0',
            label: 'label 1'
        }
    ]
}

export default [
    {
        url: 'basic-api/account/getAll',
        method: 'get',
        response: () => {
            return resultSuccess(userInfo)
        }
    }
] as MockMethod []