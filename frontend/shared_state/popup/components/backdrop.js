import { Component } from 'react';
import { isPopupShowing, bindToPopupStore, getAlertMessage } from '../store';
import Alert from './alert';
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
    return (
      <div className={styles.root}>
        {this._renderPopup()}
      </div>
    );
  }

  _renderPopup() {
    const alertMessage = getAlertMessage();
    if (alertMessage) {
      return <Alert message={alertMessage} />;
    }

    return null;
  }
}
