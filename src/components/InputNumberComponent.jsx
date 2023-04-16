import React from 'react'

function InputNumberComponent({type, id, placeholder, label, name, val, onCH, className}) {
  return (
    <div className="form">
        <input 
            type={type}
            name={name}
            className={`form-control focus:ring-0 focus:border-yellow-500  ${className}`} 
            id={id} 
            placeholder={placeholder}
            value={val}
            onChange={onCH}
            onBlur={onCH}
        />
        <label for={label}>{label}</label>
    </div>
  )
}

export default InputNumberComponent  