import { Component, PropTypes } from 'react';
import classNames from 'classnames';
import { childrenPropType } from '_frontend/prop_types';
import styles from './heading.styl';

export default class Heading extends Component {
  render() {
    const myClassName = classNames({
      [styles[this.props.size]]: true,
      [styles[this.props.type]]: true,
      [this.props.className]: !!this.props.className,
    });

    return (
      <div className={myClassName}>
        {this.props.children}
      </div>
    );
  }
}

Heading.defaultProps = { type: 'main' };

Heading.propTypes = {
  children: childrenPropType,
  className: PropTypes.string,
  size: PropTypes.oneOf(['h1', 'h2', 'h3']),
  type: PropTypes.oneOf(['main', 'secondary']),
};
