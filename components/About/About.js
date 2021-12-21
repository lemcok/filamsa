import React from 'react';
import s from './About.module.scss'

export const About = () => {
   return (
      <div className={s.about}>
         <div>
            <div className={s.card}>
               <div className={s.card__section_img}>
                  <div className={s.card__container_img}>
                     <img
                        src="assets/images/aboutus.jpg"
                        alt=""
                        className={s.card__img}
                     />
                  </div>
               </div>

               <div className={s.card__body}>
                  <h1 className={s.card__body_title}>¿Quienes Somos?</h1>
                  <p className={s.card__body_texto}>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Adipisci sequi iusto perferendis itaque sint nihil br
                     praesentium?
                     <br />
                     <br />
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Officiis veritatis ipsum tenetur ullam maiores.
                     <br />
                     <br />
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Officiis veritatis ipsum tenetur ullam maiores.
                     <br />
                     <br />
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Officiis veritatis ipsum tenetur ullam maiores.
                  </p>
               </div>
            </div>
         </div>


         <div>
            <img 
               src="assets/images/about2.jpg" 
               alt=""  
               className={s.about__middle_img}
            />

            <div className={s.mision_vision}>
               <div>
                  <h2 className={s.mision_vision__title}>mision</h2>
                  <p>
                     Proveer productos de la mas alta calidad, atendiendo
                     satisfactoriamente las necesidades de nuestros clientes,
                     ofreciendo una atencién personalizada, profesional y
                     proponiendo la mejor solucion a sus demandas.
                  </p>
               </div>
               <div>
                  <h2 className={s.mision_vision__title}>vision</h2>
                  <p>
                     Al 2027, liderar el mercado nacional con soluciones
                     industriales y reconocidos por nuestros clientes como
                     socios estratégicos, basados enla mejora continua de cada
                     uno de nuestros procesos internos y externos.
                  </p>
               </div>
            </div>
            
         </div>
      </div>
   );
};
