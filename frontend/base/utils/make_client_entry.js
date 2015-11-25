import { PropTypes } from 'react';
import { render } from 'react-dom';
import { PopupBackdrop } from '../../shared_state/popup/components';
import { loadAssets } from '../../shared_state/asset_store';

export default function makeClientEntry(MyComponent) {
  render(<PopupBackdrop />, document.getElementById('popupBackdrop'));
  return MyComponent;
}
