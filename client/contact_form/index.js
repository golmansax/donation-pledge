import React from 'react';
import { Button, H3 } from '../components';
import styles from './contact_form.styl';

export default class HomePage extends React.Component {
  render() {
    return (
      <div className={styles.rootElement}>
        <div className={styles.section}>
          <H3>Name</H3>
          <input className={styles.input} type='text' />
        </div>
        <div className={styles.section}>
          <H3>Email</H3>
          <input className={styles.input} type='text' />
        </div>
        <div className={styles.section}>
          <H3>Comment</H3>
          <textarea className={styles.textarea} />
        </div>
        <H3><Button>Send!</Button></H3>
      </div>
    );
  }
}
