import { render } from 'react-dom';
import { ContactForm } from '../contact/components';
import { PledgeBanner } from '../pledge/components';

render(<ContactForm />, document.getElementById('contact-form'));
render(<PledgeBanner />, document.getElementById('pledge-banner'));
