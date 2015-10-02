import { post } from '../shared/utils/my_http';

export const create = (data) => post({ url: '/contacts', data });
