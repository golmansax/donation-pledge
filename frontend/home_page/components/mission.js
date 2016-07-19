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

const renderReason = (reason, index) => (
  <div className={styles.reason} key={index}>
    <Icon className={styles.reasonIcon} name={reason.icon} />
    <H2 type='secondary'>{reason.heading}</H2>
    <P>{reason.text}</P>
  </div>
);

const Mission = () => ( // eslint-disable-line react/no-multi-comp
  <Container>
    <div className={styles.pledgeColumn}>
      <div className={styles.align}>
        <div id='pledge-banner'><PledgeBanner /></div>
      </div>
    </div>
    <div className={styles.reasonColumn}>
      {REASONS.map(renderReason)}
    </div>
  </Container>
);

export default Mission;
