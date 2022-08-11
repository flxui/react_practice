import React from 'react'
import useSearchParams from 'react-router-dom'
import './ListItem.css'

function ListItem(props: {text: string}) {
    return (
        <div className="ListItem">{props.text}</div>
    )
}

export default ListItem