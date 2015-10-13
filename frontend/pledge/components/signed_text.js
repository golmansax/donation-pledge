import { Component, PropTypes } from 'react';
import classNames from 'classnames';
import { H3 } from '../../shared/components';
import styles from './signed_text.styl';

export default class SignedText extends Component {
  render() {
    return (
      <span className={this._getRootClassName.bind(this)()}>
        <span className={this._getTextContainerClassName.bind(this)()}>
          <span className={this._getTextClassName.bind(this)()}>
            {this._renderChildren.bind(this)()}
          </span>
        </span>
        <H3 className={styles.category}>{this.props.category}</H3>
      </span>
    );
  }

  _renderChildren() {
    // We need this to keep the cursor active
    if (!this.props.children && this.props.hasFocus) {
      return <span>&nbsp;</span>;
    }

    return this.props.children;
  }

  _getTextContainerClassName() {
    return classNames({
      [styles.textContainer]: !this.props.hasFocus,
      [styles.highlightedTextContainer]: !!this.props.hasFocus,
      [styles.fullWidth]: !!this.props.fullWidth,
    });
  }

  _getTextClassName() {
    return classNames({
      [styles.text]: !this.props.hasFocus,
      [styles.textWithCursor]: !!this.props.hasFocus,
    });
  }

  _getRootClassName() {
    return classNames({
      [styles.rootElement]: !!this.props.fullWidth,
      [styles.rootElementWithMargin]: !this.props.fullWidth,
    });
  }
}

SignedText.defaultProps = {
  hasFocus: false,
  fullWidth: false,
};

SignedText.propTypes = {
  children: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  fullWidth: PropTypes.bool,
  hasFocus: PropTypes.bool,
};
