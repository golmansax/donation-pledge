import { PropTypes } from 'react';
import classNames from 'classnames';
import { H3 } from '../';
import styles from './button.styl';

function getClass({ type, className, block, rounded }) {
  return classNames({
    [styles[type]]: true,
    [styles.block]: block,
    [styles.rounded]: rounded,
    [className]: !!className,
  });
}

const Button = ({
  block, type, className, children, rounded, ...otherProps,
}) => (
  <button
    {...otherProps}
    className={getClass({ type, className, block, rounded })}
    >
    <H3>{children}</H3>
  </button>
);

Button.defaultProps = {
  block: false,
  rounded: true,
  type: 'main',
};

Button.propTypes = {
  block: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
  className: PropTypes.string,
  rounded: PropTypes.bool.isRequired,
  type: PropTypes.oneOf(['main', 'outline']),
};

export default Button;
