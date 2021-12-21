import React from 'react'
import s from './ContactForm.module.scss'

export const ContactForm = () => {
   const handleSendMessage = (e) => {
      e.preventDefault();
   }
   return (
      <form onSubmit={handleSendMessage} className={s.form} >
               <h2 className={s.form__title}>Envianos un mensaje</h2>
               <div className={s.form__control_group}>
                  <label htmlFor="">
                     Nombre
                     <span className={s.label__requied_indicator}>*</span>
                  </label>
                  <input type="text" className={s.form_input} />
               </div>
               <div className={s.form__control_group}>
                  <label htmlFor="">
                     Tu Email
                     <span className={s.label__requied_indicator}>*</span>
                  </label>
                  <input type="text" className={s.form_input} />
               </div>
               <div className={s.form__control_group}>
                  <label htmlFor="">
                     Mensaje
                     <span className={s.label__requied_indicator}>*</span>
                  </label>
                  <textarea 
                     rows={4}
                     className={s.form_input} 
                  ></textarea>
               </div>

               <button
                  className={s.btn__send}
               >
                  Enviar Mensaje
                  <i className={`ri-mail-send-line ${s.btn__icon}`}></i>
               </button>
            </form>
   )
}
