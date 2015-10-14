const storage = {};

export function registerScrollTarget(targetKey, target) {
  if (targetKey in storage) {
    throw new Error(`Target '${targetKey}' has already been registered`);
  }

  storage[targetKey] = target;
}
