import { Component, PropTypes } from 'react';
import classNames from 'classnames';
import styles from './container.styl';

export default class Container extends Component {
  render() {
    const myClass = classNames({
      [styles.rootElement]: true,
      [this.props.className]: !!this.props.className,
    });

    return (
      <div className={myClass}>{this.props.children}</div>
    );
  }
}

Container.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
};
