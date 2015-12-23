import PLEDGERS from '_data/pledgers';

const images = {};
Object.keys(PLEDGERS).forEach((id) => {
  console.log('wtf', id);
  images[id] = require(`./${id}.jpg`);
});

export const getPledgerImage = (id) => images[id];
