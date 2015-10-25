import { Component, PropTypes } from 'react';
import { Button } from '../../../base/components';
import { closeAlert } from '../actions';
import styles from './alert.styl';

export default class Alert extends Component {
  render() {
    return (
      <div className={styles.root}>
        <div className={styles.message}>{this.props.message}</div>
        <Button onClick={closeAlert}>Ok</Button>
      </div>
    );
  }
}

Alert.propTypes = {
  message: PropTypes.string.isRequired,
};
