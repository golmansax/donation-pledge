import { Component, PropTypes } from 'react';
import favicon from './favicon.png';
import { getAsset } from '../assets/store';
import './default.styl';

export default class DefaultLayout extends Component {
  render() {
    const cssFile = getAsset(`${this.props.name}.css`);
    const jsFile = getAsset(`${this.props.name}.js`);

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
            href='http://fonts.googleapis.com/css?family=Pacifico:400'
          />
          <link
            type='text/css'
            rel='stylesheet'
            href='http://fonts.googleapis.com/css?family=Droid+Sans:400,700'
          />
          <link
            rel='stylesheet'
            href='https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css'
          />
          <link rel='stylesheet' href={`/${cssFile}`} />
          <link rel='icon' href={favicon} />
          <meta name='viewport' content='width=device-width, user-scalable=no' />
          <meta name='apple-mobile-web-app-status-bar-style' content='black-translucent' />
        </head>
        <body>
          {this.props.children}
          <script type='text/javascript' src={`/${jsFile}`} />
        </body>
      </html>
      /* eslint-enable max-len */
    );
  }
}

DefaultLayout.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};
