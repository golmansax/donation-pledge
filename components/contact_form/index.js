import React from 'react';
import { Button, H3 } from '../shared';
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
            onChange={this._updateState.bind(this, 'name')}
          />
        </div>
        <div className={styles.section}>
          <H3>Email</H3>
          <input
            className={styles.input}
            type='text'
            value={this.state.email}
            onChange={this._updateState.bind(this, 'email')}
          />
        </div>
        <div className={styles.section}>
          <H3>Comment</H3>
          <textarea
            className={styles.textarea}
            value={this.state.comment}
            onChange={this._updateState.bind(this, 'comment')}
            rows={4}
          />
        </div>
        <Button onClick={this._checkState.bind(this)}>
          Send!
        </Button>
      </div>
    );
  }

  _updateState(attr, event) {
    this.setState({ [attr]: event.target.value });
  }

  _checkState(event) {
    let message = null;

    if (!this.state.name) {
      message = 'Please fill out a name';
    } else if (!this.state.email) {
      message = 'Please fill out a email';
    } else if (!this.state.comment) {
      message = 'Please fill out a comment';
    }

    if (message) {
      alert(message);
      event.preventDefault();
    }
  }
}
