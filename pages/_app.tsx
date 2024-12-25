import Layout from '@/components/layout/Layout';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Quicksand } from 'next/font/google';

const quickSand = Quicksand({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <style jsx global>
        {`
          html {
            font-family: ${quickSand.style.fontFamily};
          }
        `}
      </style>
      <Component {...pageProps} />
    </Layout>
  );
}
