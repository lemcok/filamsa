import { Footer } from "../footer/Footer"
import { Header } from "../header/Header"
import { Meta } from "../meta/Meta"

export const Layout = ({ children }) => {
    return (
        <>
            <Meta/>
            <Header/>

            <main className='main'>
                { children }
            </main>

            <Footer />
        </>
    )
}
