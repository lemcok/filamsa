import { Footer } from "../footer/Footer"
import { Header } from "../header/Header"
import { Meta } from "../meta/Meta"

import dynamic from 'next/dynamic';
const DynamicComponentWithNoSSR = dynamic(
   () => import('../scrollUp/ScrollUp'),
   { ssr: false }
);

export const Layout = ({ children }) => {
    return (
        <>
            <Meta/>
            <Header/>

            <main className='main'>
                { children }
            </main>

            <Footer />
            <DynamicComponentWithNoSSR />
        </>
    )
}
