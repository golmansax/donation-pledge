import { PropTypes } from 'react';
import { loadAssets } from '../../shared_state/asset_store';

export default function makeServerEntry(MyComponent) {
  const ServerComponent = ({ assets, ...otherProps}) => {
    loadAssets(assets);
    return <MyComponent {...otherProps} />;
  };

  ServerComponent.propTypes = {
    assets: PropTypes.object.isRequired,
  };

  return ServerComponent;
}
