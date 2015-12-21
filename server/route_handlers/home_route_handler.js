import { renderToStaticMarkup } from 'react-dom/server';
import webpackAssets from '../../webpack/assets';
import HomePage from '../../webpack/build/home_page.server_entry';

const HomeRouteHandler = (req, res) => {
  const page = renderToStaticMarkup(<HomePage assets={webpackAssets} />);
  res.send(`<!DOCTYPE html>${page}`);
};

export default HomeRouteHandler;
