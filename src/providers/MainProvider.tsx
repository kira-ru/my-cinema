import { FC, ReactNode } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Provider } from 'react-redux'

import { Layout } from '@components/Layout/Layout'

import { Toast } from '@ui/Toast/Toast'

import { store } from '@store/index'
import {HeadProvider} from "./HeadProvider/HeadProvider";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: { refetchOnWindowFocus: false },
    },
})

export const MainProvider: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <HeadProvider>
            <Provider store={store}>
                <QueryClientProvider client={queryClient}>
                    <Toast />
                    <Layout>{children}</Layout>
                </QueryClientProvider>
            </Provider>
        </HeadProvider>
    )
}
