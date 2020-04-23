import React from 'react'

export default function FormInput({handleChange, name, type, placeholder, value, label}) {
    return (
        <div class="form-group">
          <label for={`${name + type + placeholder + label}`}>{label}</label>
          <input
            name={name}
            type={type}
            value={value[name]}
            class="form-control"
            id={`${name + type + placeholder + label}`}
            placeholder={placeholder}
            onChange={(evt) => handleChange(evt)}
          />
        </div>
    )
}
