import '../styles/globals.css'

import type { AppProps } from 'next/app'
import { SWRConfig } from 'swr'
import request from 'graphql-request'

// function localStorageProvider() {
//   // When initializing, we restore the data from `localStorage` into a map.
//   const map = new Map(JSON.parse(localStorage.getItem('app-cache') || '[]'))

//   // Before unloading the app, we write back all the data into `localStorage`.
//   window.addEventListener('beforeunload', () => {
//     const appCache = JSON.stringify(Array.from(map.entries()))
//     localStorage.setItem('app-cache', appCache)
//   })
//   // We still use the map for write & read for performance.
//   return map
// }

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig value={
      {
        fetcher: (query: string, variables) =>
          request(`${process.env.APIS_URL}/graphql`, query, variables),
      }
      }>
      <Component {...pageProps} />
     </SWRConfig>
  )
}

export default MyApp
