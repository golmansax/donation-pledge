import { Dispatcher } from 'flux';

const dispatcher = new Dispatcher();

export function register() {
  dispatcher.register(...arguments);
}

export function dispatch() {
  dispatcher.dispatch(...arguments);
}
