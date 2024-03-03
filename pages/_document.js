import { Head, Html, Main, NextScript } from 'next/document';
import React from 'react';

const Document = () => {
  return (
    <Html lang="en">
      <Head>
        <meta name="format-detection" content="telephone=no" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
