import { Component } from 'react';
import { DefaultLayout } from '../../shared/layouts';
import { Button, Container, H1, H2 } from '../../shared/components';
import { Pledge } from '../../pledge/components';
import { ContactForm } from '../../contact/components';
import Mission from './mission';
import styles from './home_page.styl';

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
            <Button className={styles.mainButton} style={{display: 'none'}}>
              Make a pledge
            </Button>
          </Container>

          <div className={styles.mainMessage}>
            <Container>
              <H2 type='secondary'>
                Commit to supporting the causes that mean the most to you
              </H2>
            </Container>
          </div>
        </div>

        <div className={styles.missionSection}>
          <Mission />
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
