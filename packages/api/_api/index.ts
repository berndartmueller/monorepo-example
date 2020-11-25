import { NowRequest, NowResponse } from '@vercel/node';
import {getResult} from '../src';

export default (_req: NowRequest, res: NowResponse): void => {
  res.json({ result: getResult() });
};
