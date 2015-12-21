import { DefaultLayout } from '../../base/layouts';
import UserPageContent from './content';

const DESCRIPTION = '';

const UserPage = () => (
  <DefaultLayout
    title='Holman Gao’s Impact Pledge'
    name='user_page'
    description={DESCRIPTION}
    >
    <div id='content'><UserPageContent /></div>
  </DefaultLayout>
);

export default UserPage;
