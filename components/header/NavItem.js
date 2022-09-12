import Link from "next/link"
import { useRouter } from "next/router";
import { useState } from "react";
import s from './Header.module.scss';

export const NavItem = ({ path_name, href }) => {
   const [ toggle, setToggle ] = useState(false);
   const router = useRouter();
   const link_style = router.asPath === href ? `${s.nav__link} ${s.active_link}` : `${s.nav__link}`

  return (
   <li className={s.nav__item}>
   <Link href={href}>
      <a
         onClick={() => setToggle(!toggle)}
         className={link_style}
      >
         { path_name }
      </a>
   </Link>
</li>
  )
}
