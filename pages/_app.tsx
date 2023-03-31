import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { NavBar } from '@/components/utils/Navigation'
import { Client, Provider, cacheExchange, fetchExchange } from 'urql';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavBar/>
      <Component {...pageProps} />
    </>
  )
}
