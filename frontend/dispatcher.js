import { Dispatcher } from 'flux';

const dispatcher = new Dispatcher();

export function register() {
  dispatcher.register.apply(dispatcher, arguments);
}

export function dispatch() {
  dispatcher.dispatch.apply(dispatcher, arguments);
}
