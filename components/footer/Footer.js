import s from './Footer.module.scss';
import Link from 'next/link';

export const Footer = () => {
   return (
      <footer className={`${s.footer} section`}>
         <div className={`${s.footer__container} container grid`}>
            <div className={`${s.footer__content} grid`}>
               <div className={s.footer__data}>
                  <h3 translate="no" className={s.footer__title}>
                     Filamsa
                  </h3>
                  <p className={s.footer__description}>
                     Brindamos materiales y soluciones de calidad para la minería y construcción. <br /><br />
                     ¡Nuestro compromiso contigo!
                  </p>

                  <div>
                     <Link href="#">
                        <a target="_blank" className={s.footer__social}>
                           <i className="ri-facebook-box-fill"></i>
                        </a>
                     </Link>
                     <Link href="#">
                        <a target="_blank" className={s.footer__social}>
                           <i className="ri-whatsapp-fill"></i>
                        </a>
                     </Link>
                     <Link href="#">
                        <a target="_blank" className={s.footer__social}>
                           <i className="ri-instagram-fill"></i>
                        </a>
                     </Link>
                  </div>
               </div>

               <div className="footer__data">
                  <h3 className={s.footer__subtitle}>About</h3>
                  <ul>
                     <li className={s.footer__item}>
                        <Link href="#">
                           <a className={s.footer__link}>About Us</a>
                        </Link>
                     </li>
                     <li className={s.footer__item}>
                        <Link href="#">
                           <a className={s.footer__link}>Features</a>
                        </Link>
                     </li>
                     <li className={s.footer__item}>
                        <Link href="#">
                           <a className={s.footer__link}>New & Blog</a>
                        </Link>
                     </li>
                  </ul>
               </div>

               <div className="footer__data">
                  <h3 className={s.footer__subtitle}>Company</h3>
                  <ul>
                     <li className={s.footer__item}>
                        <Link href="#">
                           <a className={s.footer__link}>Team</a>
                        </Link>
                     </li>
                     <li className={s.footer__item}>
                        <Link href="#">
                           <a className={s.footer__link}>Plan & Pricing</a>
                        </Link>
                     </li>
                     <li className={s.footer__item}>
                        <Link href="#">
                           <a className={s.footer__link}>Become a member</a>
                        </Link>
                     </li>
                  </ul>
               </div>

               <div className="footer__data">
                  <h3 className={s.footer__subtitle}>Support</h3>
                  <ul>
                     <li className={s.footer__item}>
                        <Link href="#">
                           <a className={s.footer__link}>FAQs</a>
                        </Link>
                     </li>
                     <li className={s.footer__item}>
                        <Link href="#">
                           <a className={s.footer__link}>Suppor Center</a>
                        </Link>
                     </li>
                     <li className={s.footer__item}>
                        <Link href="#">
                           <a className={s.footer__link}>Contant Us</a>
                        </Link>
                     </li>
                  </ul>
               </div>
            </div>

            <div className={s.footer__rights}>
               <p className={s.footer__copy}>
                  &#169; 2021 Filamsa. All rights reserved.
               </p>
               <div className={s.footer__terms}>
                  <Link href="#">
                     <a className={s.footer__terms_link}>By Ricardo Flores</a>
                  </Link>
               </div>
            </div>
         </div>
      </footer>
   );
};
