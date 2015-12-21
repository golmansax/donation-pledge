import { PropTypes } from 'react';
import { A, Icon } from '../../base/components';
import styles from './logo.styl';

const BrandLogo = ({ className }) => (
  <A href='/' design='inherit' className={className}>
    <Icon className={styles.icon} name='heart-pulse' />
    My Impact Pledge
  </A>
);

BrandLogo.propTypes = {
  className: PropTypes.string,
};

export default BrandLogo;
