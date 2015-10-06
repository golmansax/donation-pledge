let storage = {};

export function loadAssets(assets) {
  storage = Object.assign({}, assets);
}

export function getAsset(filename) {
  const index = filename.lastIndexOf('.');
  const name = filename.substring(0, index);
  const extension = filename.substring(index + 1);

  return storage[name][extension];
}
