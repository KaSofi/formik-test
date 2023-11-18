import React from "react";

export const FormikApp = ( {icon, name, placeholder, type, error, handle, values, touched }) => {

  return(
    <>
    <div className="input-position">
      <p className='sign-error' >
          {
            error && touched && error
          }
      </p>
      <input type={type} name={name} className={` ${error && touched ? 'error-bottom' : ''}`} placeholder={placeholder} maxLength={25} onChange={handle} value={values}/>
      <img src={icon} alt="mail"/>
    </div>
    </>
  )
}