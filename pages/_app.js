import App from 'next/app';
import React from 'react';
import '../static/scss/normalize.scss';
import '../static/scss/extra.scss'

export default class MyApp extends App {
  static async getInitialProps ({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return {pageProps};
  }

  render () {
    const {Component, pageProps} = this.props;
    return <Component {...pageProps} />
  }
}