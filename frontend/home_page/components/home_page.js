import { DefaultLayout } from '../../base/layouts';
import HomePageContent from './content';

const HomePage = () => (
  <DefaultLayout title='My Impact Pledge' name='home_page'>
    <div id='content'><HomePageContent /></div>
  </DefaultLayout>
);

export default HomePage;
