import s from '../Home.module.scss';

export const Product = ({ name, description, imgUrl }) => {
    return (
        <div>
            <div className={s.product}>
                    <div className={s.product__data}>
                        <h2 className={s.product__title}>{ name }</h2>
                        <p>{ description }</p>
                    </div>
                    <div className={s.product__imgs}>
                        <img
                            src={ imgUrl }
                            alt="pistole"
                        />
                    </div>
                </div>
        </div>
    )
}
