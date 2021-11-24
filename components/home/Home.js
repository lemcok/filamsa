import { Hero } from './hero/Hero';
import { Product } from './product/Product';

import s from './Home.module.scss';
import products from './productsInfo.json'

import dynamic from 'next/dynamic'
const DynamicComponentWithNoSSR = dynamic(
    () => import('../scrollUp/ScrollUp'),
    { ssr: false }
)

export const Home = () => {

    return (
        <div className={s.home}>
            <Hero />

            <div>
                <h2 className={s.home__title}>Productos y Servicios</h2>
            </div>

            <div className={s.products}>
                {
                    products.map( product => ( 
                        <Product key={product.id} {...product} />
                     ))
                }
            </div>

            <DynamicComponentWithNoSSR />
        </div>
    );
}
