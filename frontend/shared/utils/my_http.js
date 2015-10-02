const onClient = !!global.window;

let request;
if (onClient) {
  request = require('superagent');
} else {
  request = () => null;
}

export const post = (options) => {
  return new Promise((resolve, reject) => {
    request.post(options.url)
      .send(options.data)
      .set('Accept', 'application/json')
      .end((err, res) => {
        if (err) {
          const { error } = res;
          error.message = res.body.error || error.message;
          reject(error);
        } else {
          resolve(res.body);
        }
      });
  });
};
