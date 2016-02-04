import '../lib/setup';
import chai, { expect } from 'chai';
import Browser from 'zombie';
import server from '../server';
import dirtyChai from 'dirty-chai';

import { beforeEach, afterEach, it } from 'arrow-mocha/es5';

chai.use(dirtyChai);

describe('server', function () {
  this.timeout(9000);

  beforeEach(() => {
    const port = 3001;
    this.server = server.listen(port);
    this.browser = new Browser({ site: `http://localhost:${port}` });
  });

  afterEach(() => {
    this.server.close();
  });

  it('renders home page', () => (
    this.browser.visit('/').then(() => {
      expect(this.browser.text('title')).to.include('My Impact Pledge –');
      expect(this.browser.text('body')).to.include('Whatimpactwill you make?');
    })
  ));

  it('renders pledger page', () => (
    this.browser.visit('/pledgers/golmansax').then(() => {
      expect(this.browser.text('title')).to.include('Holman Gao’s Impact');
      expect(this.browser.text('body')).to.include('donate to youth education');
    })
  ));
});
