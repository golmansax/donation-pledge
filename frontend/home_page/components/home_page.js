import { DefaultLayout } from '../../base/layouts';
import HomePageContent from './content';

const HomePage = () => (
  <DefaultLayout name='home_page'>
    <div id='content'><HomePageContent /></div>
  </DefaultLayout>
);

export default HomePage;
