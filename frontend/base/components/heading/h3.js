import { PropTypes } from 'react';
import { childrenPropType } from '_frontend/prop_types';
import Heading from './heading';

const H3 = ({ children, ...otherProps }) => (
  <Heading {...otherProps} size='h3'>{children}</Heading>
);

H3.propTypes = {
  children: childrenPropType,
  className: PropTypes.string,
};

export default H3;
