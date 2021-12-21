import React from 'react'
import s from './Contact.module.scss'
import { ContactForm } from './ContactForm/ContactForm'
import { Information } from './Information/Information'

const info_data = [
   {
      title: 'movil',
      subtitle: '999 999 999',
      icon: 'ri-smartphone-line',
   },
   {
      title: 'Email',
      subtitle: 'admin@filamsa.com',
      icon: 'ri-mail-line',
   },
   {
      title: 'lugar',
      subtitle: 'junin - Peru',
      icon: 'ri-map-pin-line',
   },
   {
      title: 'horario',
      subtitle: '7:30am - 6:00pm',
      icon: 'ri-time-line',
   },
]

export const Contact = () => {
   return (
      <div className={s.contact}>
         <div className={s.data}>
            { info_data.map( (info, i) => <Information key={i+1} {...info}/> ) }
         </div>

         <div className={s.section_form}>
            <ContactForm />
         </div>
         
      </div>
   )
}
