import { Component, PropTypes } from 'react';
import { H3 } from '../../shared/components';
import styles from './signed_text.styl';

export default class SignedText extends Component {
  render() {
    return (
      <span className={styles.rootElement}>
        <span className={styles.text}>{this.props.children}</span>
        <H3 className={styles.category}>{this.props.category}</H3>
      </span>
    );
  }
}

SignedText.propTypes = {
  children: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};
