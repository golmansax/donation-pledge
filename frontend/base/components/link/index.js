import { Component, PropTypes } from 'react';
import classNames from 'classnames';
import styles from './link.styl';

export default class Link extends Component {
  render() {
    const myClass = classNames({
      [styles.rootElement]: true,
      [this.props.className]: !!this.props.className,
    });

    return (
      <a {...this.props} className={myClass}>{this.props.children}</a>
    );
  }
}

Link.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
  className: PropTypes.string,
};
