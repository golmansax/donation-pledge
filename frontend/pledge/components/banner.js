import { Component } from 'react';
import SignedText from './signed_text';
import styles from './banner.styl';

const INPUT_DATA = {
  impact: {
    text: 'volunteer at a homeless shelter',
  },
  howOften: {
    text: 'Thanksgiving',
  },
};
const INPUT_ORDER = ['impact', 'howOften'];

export default class PledgeBanner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // We start by incrementing this counter
      activeInputIndex: -1,
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
        <div className={styles.pledge}>
          I pledge to
          <SignedText
            hasFocus={this._isActiveInput.bind(this)('impact')}
            category='impact'
            >
            {this.state.impact}
          </SignedText>
          every
          <SignedText
            hasFocus={this._isActiveInput.bind(this)('howOften')}
            category='how often?'
            >
            {this.state.howOften}
          </SignedText>
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
    const textToType = INPUT_DATA[activeInput].text;
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
    let nextIndex = this.state.activeInputIndex + 1;
    if (nextIndex >= INPUT_ORDER.length) { nextIndex = 0 };

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
