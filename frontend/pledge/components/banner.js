import { Component } from 'react';
import SignedText from './signed_text';
import styles from './banner.styl';

const IMPACT = 'volunteer at a homeless shelter';
let counter = 0;

export default class PledgeBanner extends Component {
  constructor(props) {
    super(props);
    this.state = { impact: '', howOften: '' };
  }

  componentDidMount() {
    setTimeout(() => {
      const interval = setInterval(() => {
        this.setState({ impact: IMPACT.substring(0, ++counter) });
        if (counter === IMPACT.length) {
          clearInterval(interval);
        }
      }, 300);
    }, 300);
  }

  render() {
    return (
      <div className={styles.rootElement}>
        <div className={styles.pledge}>
          I pledge to
          <SignedText category='impact'>
            <span className={styles.textWithCursor}>
              <span>{this.state.impact}</span>
            </span>
          </SignedText>
          every
          <SignedText category='how often?'>
            year on my birthday
          </SignedText>
        </div>
      </div>
    );
  }
}
