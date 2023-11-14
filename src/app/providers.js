'use client';

// public
import { useEffect } from "react";

// redux provider
import { Provider } from "react-redux";
import store from "@/redux/app/store";

// aos animation
import AOS from 'aos';
import 'aos/dist/aos.css';

// react query provider
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();


const Providers = ({ children }) => {

    useEffect(() => { AOS.init({ offset: 20, duration: 1000 }) }, []);


    return (
        <Provider store={store}>
            <QueryClientProvider client={queryClient}>
                {children}
            </QueryClientProvider>
        </Provider>
    );
};


export default Providers;