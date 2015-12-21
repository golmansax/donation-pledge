import { Component, PropTypes } from 'react';
import classNames from 'classnames';
import styles from './container.styl';

const getClass = ({ className }) => {
  return classNames({
    [styles.rootElement]: true,
    [className]: !!className,
  });
};

const Container = ({ className, children }) => (
  <div className={getClass({ className })}>{children}</div>
);

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
  className: PropTypes.string,
};

export default Container;
