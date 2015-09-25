import React from 'react';
import styles from './signed_text.styl';

export default class SignedText extends React.Component {
  render() {
    return (
      <span className={styles.rootElement}>
        <span className={styles.text}>{this.props.text}</span>
        <span className={styles.category}>{this.props.category}</span>
      </span>
    );
  }
}

SignedText.propTypes = {
  text: React.PropTypes.string.isRequired,
  category: React.PropTypes.string.isRequired,
};
