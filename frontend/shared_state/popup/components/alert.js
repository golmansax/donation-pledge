import { PropTypes } from 'react';
import { Button } from '../../../base/components';
import { closeAlert } from '../actions';
import styles from './alert.styl';

const Alert = ({ message }) => (
  <div className={styles.root}>
    <div className={styles.message}>{message}</div>
    <Button onClick={closeAlert}>Ok</Button>
  </div>
);

Alert.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Alert;
