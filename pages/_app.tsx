import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { NavBar } from '@/components/utils/Navigation'
import { Client, Provider, cacheExchange, fetchExchange } from 'urql';

const client = new Client({
  url: 'http://localhost:3000/graphql',
  exchanges: [cacheExchange, fetchExchange],
  fetchOptions: () => {
    const token = getToken();
    return {
      headers: { authorization: token ? `Bearer ${token}` : '' },
    };
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider value={client}>
      <NavBar/>
      <Component {...pageProps} />
    </Provider>
  )
}
