import { Component, PropTypes } from 'react';
import Heading from './heading';

export default class H3 extends Component {
  render() {
    return <Heading {...this.props} type='h3'>{this.props.children}</Heading>;
  }
}

H3.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
};
