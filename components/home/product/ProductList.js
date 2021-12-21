import React from 'react'
import products from './productsInfo.json';
import { Product } from './Product'
import s from './Product.module.scss'

export const ProductList = () => {
   return (
      <div className={`${s.products}`}>
         {products.map((product, index) => (

            <Product key={product.id} {...product} index={index+1} />
         ))}
      </div>
   )
}
