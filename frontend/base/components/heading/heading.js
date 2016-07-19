import { PropTypes } from 'react';
import classNames from 'classnames';
import { childrenPropType } from '_frontend/prop_types';
import styles from './heading.styl';

const Heading = ({ size, type, className, children }) => {
  const myClassName = classNames({
    [styles[size]]: true,
    [styles[type]]: true,
    [className]: !!className,
  });

  return (
    <div className={myClassName}>
      {children}
    </div>
  );
};

Heading.defaultProps = { type: 'main' };

Heading.propTypes = {
  children: childrenPropType,
  className: PropTypes.string,
  size: PropTypes.oneOf(['h1', 'h2', 'h3']),
  type: PropTypes.oneOf(['main', 'secondary']),
};

export default Heading;
