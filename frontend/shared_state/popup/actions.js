import './store';
import { dispatch } from '../../dispatcher';
import { ALERT, CLOSE_ALERT } from './constants';

export function closeAlert() {
  dispatch({ actionType: CLOSE_ALERT });
}
export function alert(message) {
  return new Promise((resolve) => {
    dispatch({
      actionType: ALERT,
      data: { message, resolve },
    });
  });
}

