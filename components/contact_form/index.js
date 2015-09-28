import React from 'react';
import { Button, H3 } from '../components';
import styles from './contact_form.styl';

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      comment: '',
    };
  }

  render() {
    return (
      <div className={styles.rootElement}>
        <div className={styles.section}>
          <H3>Name</H3>
          <input
            className={styles.input}
            type='text'
            value={this.state.name}
            onChange={this._updateState.bind('name')}
          />
        </div>
        <div className={styles.section}>
          <H3>Email</H3>
          <input
            className={styles.input}
            type='text'
            value={this.state.email}
          />
        </div>
        <div className={styles.section}>
          <H3>Comment</H3>
          <textarea className={styles.textarea} value={this.state.comment} />
        </div>
        <H3><Button>Send!</Button></H3>
      </div>
    );
  }

  _updateState(attr, event) {
    this.setState({ [attr]: event.target.value });
  }
}
