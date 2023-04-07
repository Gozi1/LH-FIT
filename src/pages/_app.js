import Layout from '@/components/layout'
import '@/styles/globals.scss'
import { CookiesProvider } from 'react-cookie';

export default function App({ Component, pageProps }) {
  return(
    <CookiesProvider>
    <Layout>
    <Component {...pageProps} />
    </Layout>
    </CookiesProvider>)
}
