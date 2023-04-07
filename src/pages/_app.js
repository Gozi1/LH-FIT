import Layout from '@/components/layout';
import '@/styles/globals.scss';
import { CookiesProvider } from 'react-cookie';
import '@/styles/transition.css';
import Transition from '@/components/Transition';
export default function App({ Component, pageProps }) {
	return (
		
			<CookiesProvider>
				<Layout>
        <Transition>
					<Component {...pageProps} />
          </Transition>
				</Layout>
			</CookiesProvider>
		
	);
}
