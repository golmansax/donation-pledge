import { getScrollTarget } from './store';

const onClient = !!global.window;

let animatedScrollTo;
if (onClient) {
  animatedScrollTo = require('animated-scrollto');
} else {
  animatedScrollTo = () => null;
}

export function scrollTo(targetKey) {
  const target = getScrollTarget(targetKey);

  if (!target) {
    throw new Error(`Must register '${targetKey}' before calling scrollTo`);
  }

  animatedScrollTo(document.body, target.offsetTop, 1000);
}
