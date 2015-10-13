import { Component, PropTypes } from 'react';
import classNames from 'classnames';
import styles from './paragraph.styl';

export default class Paragraph extends Component {
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

Paragraph.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
};
