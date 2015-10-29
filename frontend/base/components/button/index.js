import { PropTypes } from 'react';
import classNames from 'classnames';
import { H3 } from '../';
import styles from './button.styl';

function getClass({ type, className }) {
  return classNames({
    [styles[type]]: true,
    [className]: !!className,
  });
}

const Button = ({ type, className, children, ...otherProps }) => (
  <button {...otherProps} className={getClass({ type, className })}>
    <H3>{children}</H3>
  </button>
);

Button.defaultProps = { type: 'main' };

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
  className: PropTypes.string,
  type: PropTypes.oneOf(['main', 'outline']),
};

export default Button;
