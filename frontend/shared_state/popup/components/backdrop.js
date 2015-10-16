import { Component } from 'react';
import { isPopupShowing, bindToPopupStore } from '../store';
import styles from './backdrop.styl';

export default class PopupBackdrop extends Component {
  constructor(props) {
    super(props);
    this.state = { isShowing: isPopupShowing() };
  }

  componentDidMount() {
    bindToPopupStore(() => {
      this.setState({ isShowing: isPopupShowing() });
    });
  }

  render() {
    if (!this.state.isShowing) { return null; }
    return <div className={styles.root} />;
  }
}
