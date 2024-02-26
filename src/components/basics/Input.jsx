import React from 'react'

export default function Input({ label, placeholder, type = "text", value = "", onInput, required }) {
    return (
        <label className="w-full mb-2 form-control">
            <div className="label">
                <span className="label-text">{label}</span>
            </div>
            <input type={type} placeholder={placeholder} value={value} onInput={onInput} required={required} className="w-full py-2 input input-bordered" />
        </label>
    )
}
