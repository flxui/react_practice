import React from 'react'
import useSearchParams from 'react-router-dom'
import ListItem from './ListItem'

const wordsPerPage = 25
const words = ['Lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit', 'Nam', 'arcu', 'elit', 'mollis', 'sed', 'venenatis', 'quis', 'sollicitudin', 'nec', 'turpis', 'In', 'nulla', 'dolor', 'maximus', 'et', 'cursus', 'eget',
    'Nisl', 'nisi', 'scelerisque', 'eu', 'ultrices', 'vitae', 'auctor', 'Ut', 'diam', 'quam', 'nulla', 'porttitor', 'massa', 'id', 'neque', 'Nibh', 'venenatis', 'cras', 'sed', 'felis', 'eget', 'velit', 'aliquet', 'sagittis', 'id',
    'Lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit', 'Nam', 'arcu', 'elit', 'mollis', 'sed', 'venenatis', 'quis', 'sollicitudin', 'nec', 'turpis', 'In', 'nulla', 'dolor', 'maximus', 'et', 'cursus', 'eget',
    'Nisl', 'nisi', 'scelerisque', 'eu', 'ultrices', 'vitae', 'auctor', 'Ut', 'diam', 'quam', 'nulla', 'porttitor', 'massa', 'id', 'neque', 'Nibh', 'venenatis', 'cras', 'sed', 'felis', 'eget', 'velit', 'aliquet', 'sagittis', 'id']
// 100 words

function createFormattedWords(): Array<Array<string>> {
    const res: Array<Array<string>> = []
    for (let i = 0; i < words.length; i += wordsPerPage) {
        const chunk: Array<string> = words.slice(i, i + wordsPerPage)
        res.push(chunk)
    }
    return res
}
const formattedWords: Array<Array<string>> = createFormattedWords()

function List() {
    return (
        <div>
            {formattedWords[1].map(i => {
                return <ListItem text={i}></ListItem>
            })}
        </div>
    )
}

export default List