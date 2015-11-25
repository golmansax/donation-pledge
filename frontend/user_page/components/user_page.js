import { DefaultLayout } from '../../base/layouts';
import UserPageContent from './content';

const UserPage = () => (
  <DefaultLayout title='Holman Gao' name='user_page'>
    <div id='content'><UserPageContent /></div>
  </DefaultLayout>
);

export default UserPage;
