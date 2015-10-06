import React, { Component, PropTypes } from 'react';
import { loadAssets } from '../assets/store';

export default function makeServerEntry(MyComponent) {
  class ServerComponent extends Component {
    componentWillMount() {
      loadAssets(this.props.assets);
    }

    render() {
      return <MyComponent />;
    }
  }

  ServerComponent.propTypes = {
    assets: PropTypes.object.isRequired,
  };

  return ServerComponent;
}
