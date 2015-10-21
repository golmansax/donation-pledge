import { Component, PropTypes } from 'react';
import Heading from './heading';

export default class H2 extends Component {
  render() {
    return <Heading {...this.props} size='h2'>{this.props.children}</Heading>;
  }
}

H2.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
  className: PropTypes.string,
};
