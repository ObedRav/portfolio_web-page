import Footer from '@/components/Footer';
import Navbar from '@/components/NavBar';
import '@/styles/globals.css';
import { AnimatePresence } from 'framer-motion';
import { Montserrat } from 'next/font/google';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Favicon from '../../public/images/favicon.png'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-mont'
});

export default function App ({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href={ Favicon } />
      </Head>
      <main className={`${ montserrat.variable } font-mont bg-light dark:bg-dark w-full min-h-screen`}>
        <Navbar />
        <AnimatePresence mode='wait'>
          <Component key={ router.asPath } {...pageProps} />
        </AnimatePresence>
        <Footer />
      </main>
    </>
  );
}
