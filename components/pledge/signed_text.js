import React from 'react';
import { H3 } from '../shared';
import styles from './signed_text.styl';

export default class SignedText extends React.Component {
  render() {
    return (
      <span className={styles.rootElement}>
        <span className={styles.text}>{this.props.text}</span>
        <H3 className={styles.category}>{this.props.category}</H3>
      </span>
    );
  }
}

SignedText.propTypes = {
  text: React.PropTypes.string.isRequired,
  category: React.PropTypes.string.isRequired,
};
