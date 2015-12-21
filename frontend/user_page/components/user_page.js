import { PropTypes } from 'react';
import { DefaultLayout } from '../../base/layouts';
import UserPageContent from './content';

const getDescription = (pledger) => {
  const firstPledge = pledger.pledges[0];
  return `${firstPledge.pledgeStatement}  ${firstPledge.mission}`;
};

const UserPage = ({ pledger }) => (
  <DefaultLayout
    title={`${pledger.fullName}’s Impact Pledge`}
    name='user_page'
    description={getDescription(pledger)}
    >
    <div id='content'><UserPageContent pledger={pledger} /></div>
  </DefaultLayout>
);

UserPage.propTypes = {
  pledger: PropTypes.object.isRequired,
};

export default UserPage;
