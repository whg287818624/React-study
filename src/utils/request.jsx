import request from '@aliretail/react-universal-request';
import { Message } from '@alifd/next';

// export default async (parames: any) => {
export const post = async (parames: any) => {
  const opt = {
    type: 'json',
    method: 'post',
    // autoShowErrorMessage: true,
    ...parames,
  };

  try {
    const res = await request(opt);
    if (res.success) {
      return res || true;
    } else {
      Message.error(res.message || '服务异常，请重试。');
      return false;
    }
  } catch (e) {
    console.log(e);
    return false;
  }
};