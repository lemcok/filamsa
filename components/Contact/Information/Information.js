import React from 'react'
import s  from './Information.module.scss'

export const Information = ({ title, subtitle, icon }) => {
   return (
      <div className={s.information}>
         <i className={`${icon}`}></i>
         <label>{title}</label>
         <span>{subtitle}</span>
      </div>
   )
}
