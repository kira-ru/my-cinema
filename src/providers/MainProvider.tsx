import { QueryClient, QueryClientProvider } from 'react-query'
import {FC, ReactNode} from "react";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: { refetchOnWindowFocus: false },
    },
})


export const MainProvider: FC<{children: ReactNode}> = ({children}) => {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
};