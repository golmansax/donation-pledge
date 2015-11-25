import { render } from 'react-dom';
import { PopupBackdrop } from '../../shared_state/popup/components';

export default function makeClientEntry(MyComponent) {
  render(<PopupBackdrop />, document.getElementById('popupBackdrop'));
  return MyComponent;
}
