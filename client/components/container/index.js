import React from 'react';
import classNames from 'classnames';
import styles from './container.styl';

export default class Container extends React.Component {
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
  className: React.PropTypes.string,
  children: React.PropTypes.oneOfType([
    React.PropTypes.element,
    React.PropTypes.string,
    React.PropTypes.arrayOf(React.PropTypes.element),
  ]).isRequired,
};
