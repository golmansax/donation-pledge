import { PropTypes } from 'react';
import classNames from 'classnames';
import styles from './icon.styl';

const getClass = ({ name, size, className }) => classNames({
  [`lnr lnr-${name}`]: true,
  [styles[`size${size}`]]: true,
  [className]: !!className,
});

const Icon = ({ name, size, className }) => (
  <span className={getClass({ name, size, className })} />
);

Icon.defaultProps = { size: '1x' };

Icon.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['1x', '2x', '3x', '4x']),
};

export default Icon;
