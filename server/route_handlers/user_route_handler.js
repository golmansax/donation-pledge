import { renderToStaticMarkup } from 'react-dom/server';
import webpackAssets from '../../webpack/assets';
import UserPage from '../../webpack/build/user_page.server_entry';

const UserRouteHandler = (req, res) => {
  const page = renderToStaticMarkup(<UserPage assets={webpackAssets} />);
  res.send(`<!DOCTYPE html>${page}`);
};

export default UserRouteHandler;
