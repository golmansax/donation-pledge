import { Component, PropTypes } from 'react';
import { childrenPropType } from '_frontend/prop_types';
import Heading from './heading';

export default class H3 extends Component {
  render() {
    return <Heading {...this.props} size='h3'>{this.props.children}</Heading>;
  }
}

H3.propTypes = {
  children: childrenPropType,
  className: PropTypes.string,
};
