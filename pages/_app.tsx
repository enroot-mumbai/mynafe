import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../src/components/layout/Layout'
import './../src/theme/global.scss';
import MuiCssBaseline from '@mui/material/CssBaseline';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <MuiCssBaseline />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
    )
}
