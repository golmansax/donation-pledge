import React from 'react';
import classNames from 'classnames';
import styles from './index.styl';

export default class Heading extends React.Component {
  render() {
    const myClassName = classNames({
      [this.props.className]: !!this.props.className,
      [styles.rootElement]: true,
    });

    return (
      <div className={myClassName}>
        {this.props.children}
      </div>
    );
  }
}
