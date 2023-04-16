import React from 'react'

function Inputcomponent({type, id, placeholder, label, name, val, onCH, className}) {
  return (
    <div className="form-floating">
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

export default Inputcomponent  