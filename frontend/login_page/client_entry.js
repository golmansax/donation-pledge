import { render } from 'react-dom';
import { LoginPageContent } from './components';
import { makeClientEntry } from '../base/utils';

render(
  makeClientEntry(<LoginPageContent />),
  document.getElementById('content')
);
