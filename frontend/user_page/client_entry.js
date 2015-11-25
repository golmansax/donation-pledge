import { render } from 'react-dom';
import { UserPageContent } from './components';
import { PopupBackdrop } from '../shared_state/popup/components';

render(<PopupBackdrop />, document.getElementById('popupBackdrop'));
render(<UserPageContent />, document.getElementById('content'));
