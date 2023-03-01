import React from 'react'

function Inputcomponent({type, id, placeholder, label}) {
  return (
    <div class="form-floating">
        <input 
            type={type}
            className="form-control focus:ring-0 focus:border-yellow-500 " 
            id={id} 
            placeholder={placeholder}
        />
        <label for={label}>{label}</label>
    </div>
  )
}

export default Inputcomponent