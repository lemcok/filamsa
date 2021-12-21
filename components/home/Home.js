import { Hero } from './hero/Hero';
import { ProductList } from './product/ProductList';
import s from './Home.module.scss';


export const Home = () => {
   return (
      <div className={s.home}>
         <Hero />

         <div>
            <h2 className={s.home__title}>Productos y Servicios</h2>
         </div>

         <ProductList />
         
      </div>
   );
};
