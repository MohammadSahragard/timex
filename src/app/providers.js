'use client';

// public
import { useEffect } from "react";

// redux provider
import { Provider } from "react-redux";
import store from "@/redux/app/store";

// aos animation
import AOS from 'aos';
import 'aos/dist/aos.css';


const Providers = ({ children }) => {

    useEffect(() => {AOS.init({offset: 20, duration: 1000})}, []);


    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};


export default Providers;