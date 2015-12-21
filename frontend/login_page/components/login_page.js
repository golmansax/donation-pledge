import { DefaultLayout } from '../../base/layouts';
import LoginPageContent from './content';

const LoginPage = () => (
  <DefaultLayout title='Log In' name='login_page'>
    <div id='content'><LoginPageContent /></div>
  </DefaultLayout>
);

export default LoginPage;
