import { Component } from 'react';
import { DefaultLayout } from '../shared/layouts';
import { Container, H1 } from '../shared/components';
import { Pledge, PledgeBanner } from '../pledge/components';
import { ContactForm } from '../contact/components';
import styles from './style.styl';

export default class HomePage extends Component {
  render() {
    return (
      <DefaultLayout title='My Impact Pledge' name='home_page'>
        <div className={styles.mainContainer}>
          <Container>
            <H1 className={styles.mainHeading}>
              What
              <div className={styles.headingEmphasis}>impact</div>
              will you make?
            </H1>
          </Container>
        </div>

        <div className={styles.missionSection}>
          <Container>
            Build a habit of supporting causes that mean the most to you
          </Container>
        </div>
        <div id='pledge-banner'><PledgeBanner /></div>

        <div className={styles.section}>
          <Container>
            <H1 className={styles.sectionHeading}>Sample Pledge</H1>
            <Pledge />
          </Container>
        </div>

        <div className={styles.contactSection}>
          <Container>
            <H1 className={styles.sectionHeading}>Contact us</H1>
            <div id='contact-form'><ContactForm /></div>
          </Container>
        </div>
      </DefaultLayout>
    );
  }
}
