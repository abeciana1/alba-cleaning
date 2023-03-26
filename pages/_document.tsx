import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/soap-suds-favicon.webp"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/soap-suds-favicon.webp"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/soap-suds-favicon.webp"/>
        <link rel="mask-icon" href="/soap-suds-favicon.webp" color="#212121"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
