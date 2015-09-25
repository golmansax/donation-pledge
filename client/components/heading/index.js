import React from 'react';
import classNames from 'classnames';
import styles from './index.styl';

class Heading extends React.Component {
  render() {
    const myClassName = classNames({
      [styles[this.props.type]]: true,
      [this.props.className]: !!this.props.className,
    });

    return (
      <div className={myClassName}>
        {this.props.children}
      </div>
    );
  }
}

Heading.propTypes = {
  className: React.PropTypes.string,
  type: React.PropTypes.oneOf([
    'h1', 'h2', 'h3',
  ]),
  children: React.PropTypes.oneOfType([
    React.PropTypes.element,
    React.PropTypes.string,
    React.PropTypes.arrayOf(React.PropTypes.element),
  ]).isRequired,
};

export class H1 extends React.Component {
  render() {
    return <Heading {...this.props} type='h1'>{this.props.children}</Heading>
  }
}

export class H2 extends React.Component {
  render() {
    return <Heading {...this.props} type='h2'>{this.props.children}</Heading>
  }
}

export class H3 extends React.Component {
  render() {
    return <Heading {...this.props} type='h3'>{this.props.children}</Heading>
  }
}

export class H4 extends React.Component {
  render() {
    return <Heading {...this.props} type='h4'>{this.props.children}</Heading>
  }
}
