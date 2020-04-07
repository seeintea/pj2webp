import App from 'next/app';
import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import '../static/scss/normalize.scss';
import '../static/scss/extra.scss'

export default class Etapes extends App {
  static async getInitialProps ({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return {pageProps};
  }

  render () {
    const {Component, pageProps} = this.props;
    return (
      <div>
        <Header/>
        <Component {...pageProps} />
        <Footer/>
      </div>
    )
  }
}