import React from 'react';
import { GoogleAnalytics, usePageViews } from "nextjs-google-analytics";

import '../styles/globals.scss';
import { Layout } from '../components';

const MyApp = ({ Component, pageProps }) => {
  usePageViews();
  return (
    <>
    <GoogleAnalytics />
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </>
  );
}

export default MyApp;
