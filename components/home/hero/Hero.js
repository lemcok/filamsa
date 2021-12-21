import s from './Hero.module.scss';

export const Hero = () => {
   return (
      <div className={s.hero}>
         <div className={`${s.hero__container}`}>
            <img
               src="/assets/images/hero1.jpg"
               className={s.hero__img}
               alt="hero image"
            />

            <div className={`${s.hero__content}`}>
               <div className={s.hero__data}>
                  <span className={s.hero__data_subtitle}>
                     Tecnologia de calidad <br /> para la mineria y <br /> construccion
                  </span>
               </div>
               <div className={s.hero__certificate_img}>
                  <img src="/assets/images/certificate.png" alt="" />
               </div>
            </div>

         </div>
      </div>
   );
};
