import { render } from 'react-dom';
import { HomePageContent } from './components';
import { makeClientEntry } from '../base/utils';

render(
  makeClientEntry(<HomePageContent />),
  document.getElementById('content')
);
