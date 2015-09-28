import React from 'react';
import classNames from 'classnames';
import styles from './button.styl';

export default class Button extends React.Component {
  render() {
    const myClass = classNames({
      [styles[this.props.type]]: true,
      [this.props.className]: !!this.props.className,
    });

    return (
      <div className={myClass}>{this.props.children}</div>
    );
  }
}

Button.defaultProps = { type: 'main' };

Button.propTypes = {
  className: React.PropTypes.string,
  children: React.PropTypes.oneOfType([
    React.PropTypes.element,
    React.PropTypes.string,
    React.PropTypes.arrayOf(React.PropTypes.element),
  ]).isRequired,
  type: React.PropTypes.string,
};
