import s from '../../styles/components/Header.module.scss';
import Link from 'next/link'
import { useState } from 'react';

export const Header = (): JSX.Element => {

    const [toggle, setToggle] = useState<boolean>(false);

    return (
        <header className={s.header} id="header">
            <nav className={`${s.nav} container`}>
                <div className={s.nav__logo}>
                    <img src="/assets/images/logo.ico" alt="" />
                    <h2 className={s.nav__logo_title}>Filamsa</h2>
                </div>
                
                <div className={ toggle ? `${s.nav__menu} ${s.show_menu}`: `${s.nav__menu}` }>
                    <ul className={s.nav__list}>
                        <li className={s.nav__item}>
                            <Link href="#home">
                                <a onClick={ () => setToggle(!toggle) } className={s.nav__link}>Inicio</a>
                            </Link>
                        </li>
                        <li className={s.nav__item}>
                            <Link href="#products">
                                <a onClick={ () => setToggle(!toggle) } className={s.nav__link}>Productos y Servicios</a>
                            </Link>
                        </li>
                        <li className={s.nav__item}>
                            <Link href="#about">
                                <a onClick={ () => setToggle(!toggle) } className={s.nav__link}>Nosotros</a>
                            </Link>
                        </li>
                        <li className={s.nav__item}>
                            <Link href="#contact">
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
                    id="nav-toggle"
                    onClick={() => setToggle(true)}
                >
                    <i className="ri-menu-line"></i>
                </div>
            </nav>
        </header>
    )
}
