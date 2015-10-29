import { PropTypes } from 'react';
import classNames from 'classnames';
import { H3 } from '../';
import styles from './button.styl';

function _getClass({ type, className }) {
  return classNames({
    [styles[type]]: true,
    [className]: !!className,
  });
}

const Button = (props) => (
  <button {...props} className={_getClass(props)}>
    <H3>{props.children}</H3>
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
