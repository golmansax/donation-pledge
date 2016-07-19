import { PropTypes } from 'react';
import { childrenPropType } from '_frontend/prop_types';
import Heading from './heading';

const H1 = ({ children, ...otherProps }) => (
  <Heading {...otherProps} size='h1'>{children}</Heading>
);

H1.propTypes = {
  children: childrenPropType,
  className: PropTypes.string,
};

export default H1;
