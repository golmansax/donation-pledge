import { Component } from 'react';
import PLEDGERS from '_data/pledgers';
import { Button, Container, H1, H2 } from '../../base/components';
import { scrollTo } from '../../shared_state/scroll_to/actions';
import { registerScrollTarget } from '../../shared_state/scroll_to/store';
import { Pledge } from '../../pledge/components';
import { ContactForm } from '../../contact/components';
import { alert } from '../../shared_state/popup/actions';
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
            <div className={styles.mainHeading}>
              <H1>What</H1>
              <H1 className={styles.headingEmphasis}>impact</H1>
              <H1>will you make?</H1>
            </div>
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
            <Pledge
              pledge={PLEDGERS.golmansax.pledges[0]}
              pledger={PLEDGERS.golmansax}
            />
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
    ).then(() => scrollTo('contactSection'));
  }
}
