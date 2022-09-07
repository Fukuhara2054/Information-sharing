import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Layout } from "../components/Layout";
import { AuthProvider } from "./context/AuthContext"
import Add from '../components/add'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )
}

export default MyApp
