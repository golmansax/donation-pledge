import React, { Component, PropTypes } from 'react';
import Heading from './heading';

export default class H4 extends Component {
  render() {
    return <Heading {...this.props} type='h4'>{this.props.children}</Heading>;
  }
}

H4.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
};
