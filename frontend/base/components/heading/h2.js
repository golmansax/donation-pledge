import { PropTypes } from 'react';
import { childrenPropType } from '_frontend/prop_types';
import Heading from './heading';

const H2 = ({ children, ...otherProps }) => (
  <Heading {...otherProps} size='h2'>{children}</Heading>
);

H2.propTypes = {
  children: childrenPropType,
  className: PropTypes.string,
};

export default H2;
