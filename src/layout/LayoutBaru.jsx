import React from 'react'

export default function LayoutBaru({ text, children }) {
    return (
        <div>
            <div>{text}</div>
            <div>{children}</div>
        </div>
    )
}
