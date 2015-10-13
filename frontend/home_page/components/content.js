import { Component } from 'react';
import { Button, Container, H1, H2 } from '../../shared/components';
import { scrollTo, registerScrollTarget } from '../../shared/utils/scroll_to';
import { Pledge } from '../../pledge/components';
import { ContactForm } from '../../contact/components';
import Mission from './mission';
import styles from './content.styl';

export default class HomePageContent extends Component {
  componentDidMount() {
    registerScrollTarget('contactSection', this.refs.contactSection);
  }

  render() {
    return (
      <div>
        <div className={styles.mainContainer}>
          <Container>
            <H1 className={styles.mainHeading}>
              What
              <div className={styles.headingEmphasis}>impact</div>
              will you make?
            </H1>
            <Button className={styles.mainButton} onClick={this._goToContact}>
              Create a pledge
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

        <div className={styles.contactSection} ref='contactSection'>
          <Container>
            <H1 type='secondary' className={styles.sectionHeading}>
              Send us a message!
            </H1>
            <div id='contact-form'><ContactForm /></div>
          </Container>
        </div>
      </div>
    );
  }

  _goToContact() {
    alert(
      'We are still working on this feature, but please leave your email ' +
      'and we will reach out to you when it is ready!'
    );
    scrollTo('contactSection');
  }
}
