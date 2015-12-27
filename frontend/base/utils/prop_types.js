import { PropTypes } from 'react';

const childrenTypes = [
  PropTypes.element,
  PropTypes.string,
];
childrenTypes.push(PropTypes.arrayOf(PropTypes.oneOfType(childrenTypes)));

export function bindComponentPropTypes(klass) {
  klass.propTypes = Object.assign({
    children: PropTypes.oneOfType(childrenTypes),
  }, klass.propTypes);

  return klass;
}
