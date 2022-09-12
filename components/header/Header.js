import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';
import nav_items from '../../public/nav_items.json'

import s from './Header.module.scss';
import { NavItem } from './NavItem';

export const Header = () => {
   const router = useRouter();

   const [toggle, setToggle] = useState(false);

   const handlePushToHome = (e) => {
      e.preventDefault();
      router.push('/');
   };

   return (
      <header className={s.header} id="header">
         <nav className={`${s.nav} container`}>
            <div className={s.nav__logo} onClick={handlePushToHome}>
               <img src="/assets/images/logo.ico" alt="" />
               <h2 className={s.nav__logo_title}>Filamsa</h2>
            </div>

            <div
               className={
                  toggle ? `${s.nav__menu} ${s.show_menu}` : `${s.nav__menu}`
               }
            >
               <ul className={s.nav__list}>
                  {
                    nav_items.map( item => (
                        <NavItem key={item.path_name} {...item}/>
                    ) )
                  }
               </ul>
               <i
                  className={`ri-close-line ${s.nav__close}`}
                  onClick={() => setToggle(false)}
               ></i>
            </div>

            <div className={s.nav__toggle} onClick={() => setToggle(true)}>
               <i className="ri-menu-line"></i>
            </div>
         </nav>
      </header>
   );
};
