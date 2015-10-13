import { Component } from 'react';
import { H1 } from '../../shared/components';
import SignedText from './signed_text';
import styles from './banner.styl';

const INPUT_DATA = {
  impact: {
    texts: [
      'bake food for a homeless shelter',
      'volunteer at a retirement home',
      'donate towards fighting cancer',
    ],
  },
  howOften: {
    texts: [
      '3 months',
      'Thanksgiving',
      'year on my wedding anniversary',
    ],
  },
};
const INPUT_ORDER = ['impact', 'howOften'];

export default class PledgeBanner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // We start by incrementing these counters
      activeInputIndex: -1,
      impactTextIndex: -1,
      howOftenTextIndex: -1,

      impact: '',
      howOften: '',
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this._changeInput();
    }, 1000);
  }

  render() {
    return (
      <div className={styles.rootElement}>
        <H1 className={styles.heading} type='secondary'>I pledge...</H1>
        <div className={styles.inputContainer}>
          <div className={styles.inputLabel}>to</div>
          <div className={styles.signedTextContainer}>
            <SignedText
              hasFocus={this._isActiveInput.bind(this)('impact')}
              category='impact'
              fullWidth
              >
              {this.state.impact}
            </SignedText>
          </div>
        </div>
        <div className={styles.inputContainer}>
          <div className={styles.inputLabel}>every</div>
          <div className={styles.signedTextContainer}>
            <SignedText
              hasFocus={this._isActiveInput.bind(this)('howOften')}
              category='how often?'
              fullWidth
              >
              {this.state.howOften}
            </SignedText>
          </div>
        </div>
      </div>
    );
  }

  _renderInput(inputName) {
    if (this.state.activeInput !== inputName) {
      return <span>{this.state[inputName]}</span>;
    }

    return (
      <span className={styles.textWithCursor}>
        {this._renderTextInsideCursor(this.state[inputName])}
      </span>
    );
  }

  _renderTextInsideCursor(text) {
    // We need this to keep the cursor active
    if (!text) { return <span>&nbsp;</span>; }

    return <span>{text}</span>;
  }

  _getActiveInput() {
    return INPUT_ORDER[this.state.activeInputIndex];
  }

  _isActiveInput(inputName) {
    return this._getActiveInput() === inputName;
  }

  _startTyping() {
    const activeInput = this._getActiveInput();
    const textIndexKey = `${activeInput}TextIndex`;
    const numTexts = INPUT_DATA[activeInput].texts.length;
    this.setState({
      [textIndexKey]: (this.state[textIndexKey] + 1) % numTexts,
    });

    const textToType = INPUT_DATA[activeInput].texts[this.state[textIndexKey]];
    let counter = 0;

    const interval = setInterval(() => {
      this.setState({ [activeInput]: textToType.substring(0, ++counter) });
      if (counter === textToType.length) {
        clearInterval(interval);

        // Let it sit for awhile at this input
        setTimeout(() => {
          this._changeInput();
        }, 1000);
      }
    }, 100);
  }

  _changeInput() {
    const nextIndex = (this.state.activeInputIndex + 1) % INPUT_ORDER.length;

    this.setState({
      activeInputIndex: nextIndex,
      [INPUT_ORDER[nextIndex]]: '',
    });

    // Let it sit for awhile at this input
    setTimeout(() => {
      this._startTyping();
    }, 1000);
  }
}
