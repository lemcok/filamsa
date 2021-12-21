import s from './Product.module.scss';

export const Product = ({ name, description, imgUrl, index }) => {
   return (
      <div className={s.product}>
         <div className={ (index % 2) ?`${s.product__data} ${s.invert_position}` : `${s.product__data}` }>
            <h2 className={s.product__title}>{name}</h2>
            <p>{description}</p>
         </div>

         <div className={s.product__section_img}>
            <div className={s.product__container_img}>
               <img src={imgUrl} alt="pistole" className={s.product__img} />
            </div>
         </div>
      </div>
   );
};
