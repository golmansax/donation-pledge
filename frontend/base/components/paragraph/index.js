import { Component, PropTypes } from 'react';
import classNames from 'classnames';
import styles from './paragraph.styl';

export default class Paragraph extends Component {
  render() {
    const myClass = classNames({
      [styles.rootElement]: true,
      [styles[this.props.type]]: true,
      [this.props.className]: !!this.props.className,
    });

    return (
      <div className={myClass}>{this.props.children}</div>
    );
  }
}

Paragraph.defaultProps = {
  type: 'main',
};

Paragraph.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
  className: PropTypes.string,
  type: PropTypes.string,
};
