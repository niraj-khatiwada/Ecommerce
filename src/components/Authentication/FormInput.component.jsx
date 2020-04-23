import React from 'react'

export default function FormInput({handleChange, name, type, placeholder, value, label}) {
    return (
        <div className="form-group">
          <label htmlFor={`${name + type + placeholder + label + value}`}>{label}</label>
          <input
            name={name}
            type={type}
            value={value[name]}
            className="form-control"
            id={`${name + type + placeholder + label + value}`}
            placeholder={placeholder}
            onChange={(evt) => handleChange(evt)}
          />
        </div>
    )
}
