import { PropTypes } from 'react';
import { loadAssets } from '../../shared_state/asset_store';

export default function makeServerEntry(MyComponent) {
  /* eslint-disable no-redeclare */
  const ServerComponent = ({ assets, ...otherProps }) => {
    /* eslint-enable no-redeclare */
    loadAssets(assets);
    return <MyComponent {...otherProps} />;
  };

  ServerComponent.propTypes = {
    assets: PropTypes.object.isRequired,
  };

  return ServerComponent;
}
