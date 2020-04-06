import Document, { Head, Main, NextScript } from 'next/document';
import config from '../web.config';
import icon from '../static/extra/favicon.ico';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <html>
        <Head>
					<link rel="shortcut icon" href={ icon }></link>
					<meta name="description" content={ config.header.description }></meta>
					<meta name="keywords" content={ config.header.keywords }></meta>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}