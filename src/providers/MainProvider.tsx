import AuthProvider from '@providers/AuthProvider/AuthProvider'
import { TypeComponentAuthFields } from '@providers/AuthProvider/types'
import { FC} from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Provider } from 'react-redux'

import { Layout } from '@components/Layout/Layout'

import { Toast } from '@ui/Toast/Toast'

import { store } from '@store/index'

import { HeadProvider } from './HeadProvider/HeadProvider'
// get out
const queryClient = new QueryClient({
    defaultOptions: {
        queries: { refetchOnWindowFocus: false },
    },
})

export const MainProvider: FC<TypeComponentAuthFields> = ({ children, Component }) => {
    return (
        <HeadProvider>
            <Provider store={store}>
                <QueryClientProvider client={queryClient}>
                    <Toast />
                    <AuthProvider Component={Component}>
                        <Layout>{children}</Layout>
                    </AuthProvider>
                </QueryClientProvider>
            </Provider>
        </HeadProvider>
    )
}
