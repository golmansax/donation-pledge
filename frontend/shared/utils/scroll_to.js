const onClient = !!global.window;

let animatedScrollTo;
if (onClient) {
  animatedScrollTo = require('animated-scrollto');
} else {
  animatedScrollTo = () => null;
}

const storage = {};

export function scrollTo(targetKey) {
  if (!(targetKey in storage)) {
    throw new Error(`Must register '${targetKey}' before calling scrollTo`);
  }

  animatedScrollTo(document.body, storage[targetKey].offsetTop, 1000);
}

export function registerScrollTarget(targetKey, target) {
  if (targetKey in storage) {
    throw new Error(`Target '${targetKey}' has already been registered`);
  }

  storage[targetKey] = target;
}
