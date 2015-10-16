import { render } from 'react-dom';
import { HomePageContent } from './components';
import { PopupBackdrop } from '../shared_state/popup/components';

render(<PopupBackdrop />, document.getElementById('popupBackdrop'));
render(<HomePageContent />, document.getElementById('content'));
