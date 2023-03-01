import { TypeComponentAuthFields } from '@providers/AuthProvider/types'
import { MainProvider } from '@providers/MainProvider'
import '@styles/globals.css'
import type { AppProps } from 'next/app'

type AppPropsAuth = AppProps & TypeComponentAuthFields

export default function App({ Component, pageProps }: AppPropsAuth) {
    return (
        <MainProvider Component={Component}>
            <Component {...pageProps} />
        </MainProvider>
    )
}
