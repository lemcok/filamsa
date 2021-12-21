import s from './ScrollUp.module.scss'
import { useEffect, useState } from 'react';

function ScrollUp() {
    const [scrolly, setScrolly] = useState(0);

    useEffect(() => {
        const scrollMove = () => {
            const scrollY = window.scrollY;
            setScrolly( scrollY )
        }
        window.addEventListener('scroll', scrollMove)

        return () => {
            if (scrollY <= 200) {
                window.removeEventListener('scroll', scrollMove)
            }
            window.removeEventListener('scroll', scrollMove)
        }
    }, [])

    const handleScroollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
            <button
                onClick={ handleScroollToTop }
                className={ ( scrolly >= 200 ) ? `${s.scrollup} ${s.show__scroll}` : `${s.scrollup}`}
                >
                <i className={`ri-arrow-up-line ${s.scrollup__icon}`}></i>
            </button>
    );
}

export default ScrollUp;
