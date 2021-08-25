import '../styles/globals.css'
import type { AppProps } from 'next/app'
import themes from '../themes/themes'
import { ChakraProvider } from "@chakra-ui/react"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={themes}>  <Component {...pageProps} /></ChakraProvider>
  )
}
export default MyApp
