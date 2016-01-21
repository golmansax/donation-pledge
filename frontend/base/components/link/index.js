import { PropTypes } from 'react';
import classNames from 'classnames';
import { childrenPropType } from '_frontend/prop_types';
import styles from './link.styl';

const getClass = ({ className, design }) => {
  return classNames({
    [styles.rootElement]: true,
    [styles[design]]: !!styles[design],
    [className]: !!className,
  });
};

const Link = ({ children, className, design, ...otherProps }) => (
  <a {...otherProps} className={getClass({ className, design })}>{children}</a>
);

Link.defaultProps = {
  design: 'main',
};

Link.propTypes = {
  children: childrenPropType,
  className: PropTypes.string,
  design: PropTypes.oneOf(['main', 'inherit']).isRequired,
};

export default Link;
