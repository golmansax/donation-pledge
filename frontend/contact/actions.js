import { post } from '../base/utils';

export const create = (data) => post({ url: '/contacts', data });
