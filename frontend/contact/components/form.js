import { Component } from 'react';
import { validate as isEmailValid } from 'email-validator';
import { Button, H3 } from '../../base/components';
import { create } from '../actions';
import { alert } from '../../shared_state/popup/actions';
import styles from './form.styl';

export default class ContactForm extends Component {
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
            onChange={this._updateName}
          />
        </div>
        <div className={styles.section}>
          <H3>Email</H3>
          <input
            className={styles.input}
            type='text'
            value={this.state.email}
            onChange={this._updateEmail}
          />
        </div>
        <div className={styles.section}>
          <H3>Comment</H3>
          <textarea
            className={styles.textarea}
            value={this.state.comment}
            onChange={this._updateComment}
            rows={4}
            placeholder='e.g. Awesome Idea!'
          />
        </div>
        <Button onClick={this._submitForm} type='outline'>
          Send!
        </Button>
      </div>
    );
  }

  _updateState = (attr, event) => {
    this.setState({ [attr]: event.target.value });
  };
  _updateName = this._updateState.bind(this, 'name');
  _updateEmail = this._updateState.bind(this, 'email');
  _updateComment = this._updateState.bind(this, 'comment');

  _submitForm = (event) => {
    const errorMessage = this._validateState();
    if (errorMessage) {
      alert(errorMessage);
      event.preventDefault();
      return;
    }

    const data = {};
    ['name', 'email', 'comment'].forEach((key) => data[key] = this.state[key]);

    create(data).then(
      () => alert('Your email has been sent!'),
      () => {
        alert(
          'Sorry, something went wrong on our end. Please email ' +
          'holman@golmansax.com for support.'
        );
      }
    );
  };

  _validateState() {
    let message = null;

    if (!this.state.name) {
      message = 'Please fill out a name';
    } else if (!this.state.email) {
      message = 'Please fill out a email';
    } else if (!isEmailValid(this.state.email)) {
      message = 'Please use a valid email';
    } else if (!this.state.comment) {
      message = 'Please fill out a comment';
    }

    return message;
  }
}
