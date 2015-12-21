import { PropTypes } from 'react';
import favicon from './favicon.png';
import { getAsset } from '../../shared_state/asset_store';
import { PopupBackdrop } from '../../shared_state/popup/components';
import './default.styl';

const getCssFile = (name) => getAsset(`${name}.css`);
const getJsFile = (name) => getAsset(`${name}.js`);

const getTitle = ({ title }) => {
  if (!title) {
    return 'My Impact Pledge – Create your own recurring impact';
  }

  return `${title} | My Impact Pledge`;
};

const renderDescription = (description) => {
  if (!description) { return null; }
  return <meta name='description' content={description} />;
};

const DefaultLayout = ({ children, title, name, description }) => (
  /* eslint-disable max-len */
  <html>
    <head>
      <title>{getTitle({ title })}</title>
      <link
        type='text/css'
        rel='stylesheet'
        href='https://cdnjs.cloudflare.com/ajax/libs/normalize/3.0.3/normalize.min.css'
      />
      <link
        type='text/css'
        rel='stylesheet'
        href='https://fonts.googleapis.com/css?family=Lato:400,700'
      />
      <link
        type='text/css'
        rel='stylesheet'
        href='https://fonts.googleapis.com/css?family=Droid+Sans:400,700'
      />
      <link
        type='text/css'
        rel='stylesheet'
        href='https://fonts.googleapis.com/css?family=Merriweather:400,700'
      />
      <link
        rel='stylesheet'
        href='https://cdn.linearicons.com/free/1.0.0/icon-font.min.css'
      />
      <link rel='stylesheet' href={`/${getCssFile(name)}`} />
      <link rel='icon' href={favicon} />
      <meta name='viewport' content='width=device-width, user-scalable=no' />
      <meta name='apple-mobile-web-app-status-bar-style' content='black-translucent' />
      {renderDescription(description)}
    </head>
    <body>
      {children}
      <div id='popupBackdrop'><PopupBackdrop /></div>
      <script type='text/javascript' src={`/${getJsFile('commons')}`} />
      <script type='text/javascript' src={`/${getJsFile(name)}`} />
    </body>
  </html>
  /* eslint-enable max-len */
);

DefaultLayout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string,
};

export default DefaultLayout;
