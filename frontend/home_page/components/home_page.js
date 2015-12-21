import { DefaultLayout } from '../../base/layouts';
import HomePageContent from './content';

const DESCRIPTION = 'Create a pledge to support important causes on a ' +
  'recurring basis.  Choose your own form of impact ' +
  '(donations, volunteering, etc.) and a cause that you care about.';

const HomePage = () => (
  <DefaultLayout name='home_page' description={DESCRIPTION}>
    <div id='content'><HomePageContent /></div>
  </DefaultLayout>
);

export default HomePage;
