import '@styles/globals.css'
import type { AppProps } from 'next/app'

import { MainProvider } from '../providers/MainProvider'
import NextNProgress from "nextjs-progressbar";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <MainProvider>
            <Component {...pageProps} />
        </MainProvider>
    )
}
