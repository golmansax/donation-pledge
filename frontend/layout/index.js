import React from 'react';
import './index.styl';

export default class Layout extends React.Component {
  render() {
    return (
      /* eslint-disable max-len */
      <html>
        <head>
          <title>{this.props.title}</title>
          <link
            type='text/css'
            rel='stylesheet'
            href='https://cdnjs.cloudflare.com/ajax/libs/normalize/3.0.3/normalize.min.css'
          />
          <link
            type='text/css'
            rel='stylesheet'
            href='http://fonts.googleapis.com/css?family=Lato:400,700,400italic'
          />
          <link
            type='text/css'
            rel='stylesheet'
            href='http://fonts.googleapis.com/css?family=Merriweather:400,700,400italic'
          />
          <link
            type='text/css'
            rel='stylesheet'
            href='http://fonts.googleapis.com/css?family=Pacifico:400,700,400italic'
          />
          <link
            rel='stylesheet'
            href='https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css'
          />
          <link rel='stylesheet' href={`/${this.props.name}.css`} />
          <meta name='viewport' content='width=device-width, user-scalable=no' />
          <meta name='apple-mobile-web-app-status-bar-style' content='black-translucent' />
        </head>
        <body>
          {this.props.children}
          <script type='text/javascript' src={`/${this.props.name}-client_entry.js`} />
        </body>
      </html>
      /* eslint-enable max-len */
    );
  }
}

Layout.propTypes = {
  title: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  children: React.PropTypes.arrayOf(React.PropTypes.element).isRequired,
};
