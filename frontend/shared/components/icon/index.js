import { Component, PropTypes } from 'react';
import classNames from 'classnames';
import styles from './icon.styl';

export default class Icon extends Component {
  render() {
    const myClass = classNames({
      [`lnr lnr-${this.props.name}`]: true,
      [styles[`size${this.props.size}`]]: true,
      [this.props.className]: !!this.props.className,
    });

    return (
      <span className={myClass} />
    );
  }
}

Icon.defaultProps = { size: '1x' };

Icon.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['1x', '2x']),
};
