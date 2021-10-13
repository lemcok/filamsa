import s from './Hero.module.scss';

export const Hero = ():JSX.Element => {
    return (
        <div className={s.hero}>
            <img 
                src="/assets/images/hero1.png" 
                className={s.hero__img}
                alt="" 
            />
            <div className={`${s.hero__container}`}>
                <div className={s.hero__data}>
                    <span className={s.hero__data_subtitle}>
                        Calidad y Tecnologia para la mineria y
                        construccion
                    </span>
                </div>
                <div className={s.hero__certificate_img}>
                    <img src="/assets/images/certificate.png" alt="" />
                </div>
            </div>
        </div>
    )
}
