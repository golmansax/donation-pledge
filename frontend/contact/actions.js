import { post } from '../base/utils/my_http';

export const create = (data) => post({ url: '/contacts', data });
