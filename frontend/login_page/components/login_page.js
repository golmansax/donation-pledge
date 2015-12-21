import { DefaultLayout } from '../../base/layouts';
import LoginPageContent from './content';

const DESCRIPTION = 'Log into My Impact Pledge to create or modify your ' +
  'pledge, and post progress on how you are carrying through with your pledge.'

const LoginPage = () => (
  <DefaultLayout title='Log In' name='login_page' description={DESCRIPTION}>
    <div id='content'><LoginPageContent /></div>
  </DefaultLayout>
);

export default LoginPage;
