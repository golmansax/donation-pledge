import EventEmitter from 'events';
import { register } from '../../dispatcher';
import { ALERT, CLOSE_ALERT } from './constants';

const CHANGE_EVENT = 'CHANGE';
const storage = {};
const eventEmitter = new EventEmitter();

function emitChange() {
  eventEmitter.emit(CHANGE_EVENT);
}

export function isPopupShowing() {
  return !!storage.alert;
}

export function getAlertMessage() {
  return storage.alert.message;
}

export function bindToPopupStore(fn) {
  eventEmitter.addListener(CHANGE_EVENT, fn);
}

register((payload) => {
  switch (payload.actionType) {
    case ALERT:
      storage.alert = payload.data;
      emitChange();
      break;

    case CLOSE_ALERT:
      storage.alert.resolve();
      storage.alert = null;
      emitChange();
      break;
  }
});
