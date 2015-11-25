import { render } from 'react-dom';
import { UserPageContent } from './components';
import { makeClientEntry } from '../base/utils';

render(
  makeClientEntry(<UserPageContent />),
  document.getElementById('content')
);
