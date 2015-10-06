import serverAssets from './build/webpack_assets.server.json';
import clientAssets from './build/webpack_assets.client.json';

const assets = Object.assign({}, serverAssets);

// Now try to merge client assets in
Object.keys(clientAssets).forEach((key) => {
  if (key in assets) {
    Object.assign(assets[key], clientAssets[key]);
  } else {
    assets[key] = clientAssets[key];
  }
});

export default assets;
