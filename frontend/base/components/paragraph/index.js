import { Component, PropTypes } from 'react';
import classNames from 'classnames';
import styles from './paragraph.styl';

const getClass = ({ type, className }) => {
  return classNames({
    [styles.rootElement]: true,
    [styles[type]]: true,
    [className]: !!className,
  });
};

const Paragraph = ({ children, className, type }) => (
  <div className={getClass({ type, className })}>{children}</div>
);

Paragraph.defaultProps = {
  type: 'main',
};

Paragraph.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
  className: PropTypes.string,
  type: PropTypes.string,
};

export default Paragraph;
