import Link from 'next/link'
import { FormEvent, useState } from 'react';
import { useRouter } from 'next/router'

import s from './Header.module.scss';


export const Header = (): JSX.Element => {

    const router = useRouter();

    const [toggle, setToggle] = useState<boolean>(false);

    const handlePushToHome = (e: FormEvent<HTMLDivElement>) => {
        e.preventDefault();
        router.push('/');
    }

    return (
        <header className={s.header} id="header">
            <nav className={`${s.nav} container`}>
                <div className={s.nav__logo} onClick={ handlePushToHome }>
                    <img src="/assets/images/logo.ico" alt="" />
                    <h2 className={s.nav__logo_title}>Filamsa</h2>
                </div>
                
                <div className={ toggle ? `${s.nav__menu} ${s.show_menu}`: `${s.nav__menu}` }>
                    <ul className={s.nav__list}>
                        <li className={s.nav__item}>
                            <Link href="/">
                                <a onClick={ () => setToggle(!toggle) } className={`${s.nav__link} ${s.active_link}`}>Inicio</a>
                            </Link>
                        </li>
                        <li className={s.nav__item}>
                            <Link href="/products">
                                <a onClick={ () => setToggle(!toggle) } className={s.nav__link}>Productos y Servicios</a>
                            </Link>
                        </li>
                        <li className={s.nav__item}>
                            <Link href="/about">
                                <a onClick={ () => setToggle(!toggle) } className={s.nav__link}>Nosotros</a>
                            </Link>
                        </li>
                        <li className={s.nav__item}>
                            <Link href="/contact">
                                <a onClick={ () => setToggle(!toggle) } className={s.nav__link}>Contactenos</a>
                            </Link>
                        </li>
                    </ul>
                    <i 
                        className={`ri-close-line ${s.nav__close}`} 
                        onClick={() => setToggle(false)}
                    ></i>
                </div>

                <div 
                    className={s.nav__toggle} 
                    onClick={() => setToggle(true)}
                >
                    <i className='ri-menu-line'></i>
                </div>
            </nav>
        </header>
    )
}
