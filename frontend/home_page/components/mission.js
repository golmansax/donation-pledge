import { Component } from 'react';
import { Container, H2, Icon, P } from '../../base/components';
import { PledgeBanner } from '../../pledge/components';
import styles from './mission.styl';

const REASONS = [
  {
    icon: 'heart',
    heading: 'Change you care about',
    text: 'Find the causes that you believe will make the world more special.',
  },
  {
    icon: 'history',
    heading: 'Build a habit of impact',
    text: 'Make it a part of your DNA to give back and help others.',
  },
  {
    icon: 'users',
    heading: 'Anyone can do it!',
    text: 'Choose a goal that fits within your budget, time, and resources. ' +
      'Every little bit helps!',
  },
];

export default class Mission extends Component {
  render() {
    return (
      <Container>
        <div className={styles.pledgeColumn}>
          <div className={styles.align}>
          <div id='pledge-banner'><PledgeBanner /></div>
        </div>
        </div>
        <div className={styles.reasonColumn}>
          {REASONS.map(this._renderReason)}
        </div>
      </Container>
    );
  }

  _renderReason(reason, index) {
    return (
      <div className={styles.reason} key={index}>
        <Icon className={styles.reasonIcon} name={reason.icon} size='2x' />
        <H2 type='secondary'>{reason.heading}</H2>
        <P>{reason.text}</P>
      </div>
    );
  }
}
