import { render } from 'react-dom';
import PLEDGERS from '_data/pledgers';
import { UserPageContent } from './components';
import { makeClientEntry } from '../base/utils';

const getPledgerIdFromUrl = () => {
  const matches = window.location.href.match(/\/pledgers\/([a-zA-Z\d\-]*)/);
  if (!matches) { return null; }
  return matches[1];
};

const getPledger = () => {
  const pledgerId = getPledgerIdFromUrl();
  if (!pledgerId) { return null; }
  if (!PLEDGERS.hasOwnProperty(pledgerId)) { return null; }
  return PLEDGERS[pledgerId];
};

const pledger = getPledger();

// If we can't find the pledger, don't render anything
if (pledger) {
  render(
    makeClientEntry(<UserPageContent pledger={pledger} />),
    document.getElementById('content')
  );
}
