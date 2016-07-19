import { Dispatcher } from 'flux';

const dispatcher = new Dispatcher();

export function register(...args) {
  dispatcher.register(...args);
}

export function dispatch(...args) {
  dispatcher.dispatch(...args);
}
