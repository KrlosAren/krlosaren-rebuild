import Document, { Head, Html, Main, NextScript } from 'next/document';
import Layout from '../src/components/Layout/Layout';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
          <link
            href='https://fonts.googleapis.com/css2?family=Kanit:wght@500;600;800&family=Noto+Sans+KR:wght@400;500;700;900&display=swap'
            rel='stylesheet'
          />

          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
          <link
            href='https://fonts.googleapis.com/css2?family=Kanit:wght@500;600;800&family=Montserrat:wght@200;300;400;500;600;700;800;900&family=Noto+Sans+KR:wght@400;500;700;900&display=swap'
            rel='stylesheet'
          />
        </Head>
        <body>
          <Layout>
            <Main />
            <NextScript />
          </Layout>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
