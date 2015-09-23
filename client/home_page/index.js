import React from 'react';
import Layout from '../layout';
import './index.styl';

export default class HomePage extends React.Component {
  render() {
    return (
      <Layout title='Donation Pledge' name='home_page'>
        <h1>Commit yourself to donating to organizations every year</h1>
        <button>Make a pledge!</button>
      </Layout>
    );
  }
}
