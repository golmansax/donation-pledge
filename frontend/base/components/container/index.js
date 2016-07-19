import { PropTypes } from 'react';
import classNames from 'classnames';
import styles from './container.styl';

const getClass = ({ className, mobilePadding }) => classNames({
  [styles.rootElement]: true,
  [styles.noMobilePadding]: !mobilePadding,
  [className]: !!className,
});

const Container = ({ className, children, mobilePadding }) => (
  <div className={getClass({ className, mobilePadding })}>{children}</div>
);

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
  className: PropTypes.string,
  mobilePadding: PropTypes.bool,
};

Container.defaultProps = {
  mobilePadding: true,
};

export default Container;
