import { quickSand } from '@/utils/fonts';
import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head />
      <body className={`antialiased ${quickSand.variable} font-quick-sand`}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
