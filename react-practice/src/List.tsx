import React from 'react'
import useSearchParams from 'react-router-dom'

import ListItem from './ListItem'

const words = ['Lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit', 'Nam', 'arcu', 'elit', 'mollis', 'sed', 'venenatis', 'quis', 'sollicitudin', 'nec', 'turpis', 'In', 'nulla', 'dolor', 'maximus', 'et', 'cursus', 'eget']

function List(props: {itemsPerPage: number}) {
    return (
        <div>
            {words.map(i => {
                return <ListItem text={i}></ListItem>
            })}
        </div>
    )
}

export default List