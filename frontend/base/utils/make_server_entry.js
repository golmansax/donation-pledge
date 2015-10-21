import { PropTypes } from 'react';
import { loadAssets } from '../../shared_state/asset_store';

export default function makeServerEntry(MyComponent) {
  const ServerComponent = ({ assets, ...props}) => {
    loadAssets(assets);
    return <MyComponent {...props} />;
  };

  ServerComponent.propTypes = {
    assets: PropTypes.object.isRequired,
  };

  return ServerComponent;
}
