import { Header } from "./header/Header"
import { Meta } from "./meta/Meta"

interface Props {
    children: JSX.Element
}
export const Layout = ({ children }:Props):JSX.Element => {
    return (
        <>
            <Meta/>
            <Header/>

            <main className='main'>
                { children }
            </main>
        </>
    )
}
