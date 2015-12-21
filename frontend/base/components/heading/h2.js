import { Component, PropTypes } from 'react';
import Heading from './heading';

const H2 = ({ children, ...otherProps }) => (
  <Heading {...otherProps} size='h2'>{children}</Heading>
);

H2.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
  className: PropTypes.string,
};

export default H2;
