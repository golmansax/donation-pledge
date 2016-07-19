import { renderToStaticMarkup } from 'react-dom/server';
import PLEDGERS from '_data/pledgers';
import webpackAssets from '../../webpack/assets';
import UserPage from '../../webpack/build/user_page.server_entry';
import { handle404 } from '../error_handlers';

const UserRouteHandler = (req, res) => {
  if (!PLEDGERS.hasOwnProperty(req.params.id)) {
    handle404(req, res);
    return;
  }

  const page = renderToStaticMarkup(
    <UserPage assets={webpackAssets} pledger={PLEDGERS[req.params.id]} />
  );
  res.send(`<!DOCTYPE html>${page}`);
};

export default UserRouteHandler;
