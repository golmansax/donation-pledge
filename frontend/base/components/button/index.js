import { Component, PropTypes } from 'react';
import classNames from 'classnames';
import { H3 } from '../';
import styles from './button.styl';

export default class Button extends Component {
  render() {
    const myClass = classNames({
      [styles[this.props.type]]: true,
      [this.props.className]: !!this.props.className,
    });

    return (
      <button {...this.props} className={myClass}>
        <H3>{this.props.children}</H3>
      </button>
    );
  }
}

Button.defaultProps = { type: 'main' };

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
  className: PropTypes.string,
  type: PropTypes.string,
};
