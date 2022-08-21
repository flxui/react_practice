import React, { Component } from 'react'

interface ButtonProps {
    text: string,
    onClickFunction?(): void
}

const Button: React.FC<ButtonProps> = (props) => {
    return (
        <div>
            <button onClick={props.onClickFunction}>{props.text}</button>
        </div>
    )
}

export default Button