import React, { Component } from 'react';
import Layout from '../layout';
import { Container, H1 } from '../shared/components';
import { Pledge } from '../pledge/components';
import { ContactForm } from '../contact/components';
import styles from './home_page.styl';

export default class HomePage extends Component {
  render() {
    return (
      <Layout title='My Impact Pledge' name='home_page'>
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
      </Layout>
    );
  }
}
