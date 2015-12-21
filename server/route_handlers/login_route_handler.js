import { renderToStaticMarkup } from 'react-dom/server';
import webpackAssets from '../../webpack/assets';
import LoginPage from '../../webpack/build/login_page.server_entry';

const LoginRouteHandler = (req, res) => {
  const page = renderToStaticMarkup(<LoginPage assets={webpackAssets} />);
  res.send(`<!DOCTYPE html>${page}`);
};

export default LoginRouteHandler;
