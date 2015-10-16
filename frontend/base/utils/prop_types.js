import { PropTypes } from 'react';

export function bindComponentPropTypes(klass) {
  klass.propTypes = Object.assign({
    children: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.element),
    ]).isRequired,
  }, klass.propTypes);

  return klass;
}
