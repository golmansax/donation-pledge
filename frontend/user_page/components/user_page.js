import { PropTypes } from 'react';
import { DefaultLayout } from '../../base/layouts';
import UserPageContent from './content';

const DESCRIPTION = '';

const UserPage = ({ pledger }) => (
  <DefaultLayout
    title={`${pledger.fullName}’s Impact Pledge`}
    name='user_page'
    description={DESCRIPTION}
    >
    <div id='content'><UserPageContent pledger={pledger} /></div>
  </DefaultLayout>
);

UserPage.propTypes = {
  pledger: PropTypes.object.isRequired,
};

export default UserPage;
