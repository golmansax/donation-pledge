import { Component, PropTypes } from 'react';
import { childrenPropType } from '_frontend/prop_types';
import Heading from './heading';

export default class H1 extends Component {
  render() {
    return <Heading {...this.props} size='h1'>{this.props.children}</Heading>;
  }
}

H1.propTypes = {
  children: childrenPropType,
  className: PropTypes.string,
};
