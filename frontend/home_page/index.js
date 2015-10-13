import { Component } from 'react';
import { DefaultLayout } from '../shared/layouts';
import { Button, Container, H1, H2, P } from '../shared/components';
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
              will you make
            </H1>
            <Button className={styles.mainButton} style={{display: 'none'}}>
              Make a pledge
            </Button>
          </Container>

          <div className={styles.mainMessage}>
            <Container>
              <H2 type='secondary'>
                Build a habit of supporting causes that mean the most to you
              </H2>
            </Container>
          </div>
        </div>

        <div className={styles.missionSection}>
          <div id='pledge-banner'><PledgeBanner /></div>
          <Container className={styles.reasonsContainer}>
            <div className={styles.reason}>
              <H2 type='secondary'>Change</H2>
              <P>It is up to you to decide what to change</P>
            </div>
            <div className={styles.reason}>
              <H2 type='secondary'>Recurring</H2>
            </div>
            <div className={styles.reason}>
              <H2 type='secondary'>Personal</H2>
              It doesn&nbsp;t matter what you choose your impact to be.
            </div>
          </Container>
        </div>

        <div className={styles.section}>
          <Container>
            <H1 type='secondary' className={styles.sectionHeading}>
              See what others are pledging
            </H1>
            <Pledge />
          </Container>
        </div>

        <div className={styles.contactSection}>
          <Container>
            <H1 type='secondary' className={styles.sectionHeading}>
              Send us a message!
            </H1>
            <div id='contact-form'><ContactForm /></div>
          </Container>
        </div>
      </DefaultLayout>
    );
  }
}
