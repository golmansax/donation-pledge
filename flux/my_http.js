const onClient = !!global.window;

let reqwest;
if (onClient) {
  reqwest = require('reqwest');
} else {
  reqwest = () => null;
}

export const post = (url) => reqwest({ url, method: 'post' });
