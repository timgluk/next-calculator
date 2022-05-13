import '../styles/globals.css';
import Head from 'next/head';
import Layout from '../components/Layout';

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <link rel="shortcut icon" href="/dintek-ico.png" />
    </Head>
    <Layout>
    <main className='flex flex-col w-full items-center min-h-full py-5'>
      <Component {...pageProps} />
    </main>
    </Layout>
  </>
)

export default MyApp;
