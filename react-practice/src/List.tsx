import React from 'react'

import { useSearchParams } from 'react-router-dom'
import Button from './Button';
import ListItem from './ListItem'

const wordsPerPage = 10
const words = ['Lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit', 'Nam', 'arcu', 'elit', 'mollis', 'sed', 'venenatis', 'quis', 'sollicitudin', 'nec', 'turpis', 'In', 'nulla', 'dolor', 'maximus', 'et', 'cursus', 'eget',
    'Nisl', 'nisi', 'scelerisque', 'eu', 'ultrices', 'vitae', 'auctor', 'Ut', 'diam', 'quam', 'nulla', 'porttitor', 'massa', 'id', 'neque', 'Nibh', 'venenatis', 'cras', 'sed', 'felis', 'eget', 'velit', 'aliquet', 'sagittis', 'id',
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25',
    'Nisl', 'nisi', 'scelerisque', 'eu', 'ultrices', 'vitae', 'auctor', 'Ut', 'diam', 'quam', 'nulla', 'porttitor', 'massa', 'id', 'neque', 'Nibh', 'venenatis', 'cras', 'sed', 'felis', 'eget', 'velit', 'aliquet', 'sagittis', 'id']
// 100 words

function List() {

    let [searchParams, setSearchParams] = useSearchParams()
    const obj = Object.fromEntries([...searchParams])
    const formattedWords: Array<Array<string>> = createFormattedWords(words)

    function searchbar(words: Array<string>): Array<string> {
        const matchingWords: Array<string> = []
        words.find(word => {
            if (word.includes(obj.s))
                matchingWords.push(word)
        })
        return matchingWords
    }

    function filterOutNumber(words: Array<string>): Array<string> {
        const matchingWords: Array<string> = []
        words.find(word => {
            if (!Number.isNaN(Number(word)) === false)
                matchingWords.push(word)
        })

        return matchingWords
    }

    function createFormattedWords(words: Array<string>): Array<Array<string>> {
        let tempWords = words
        if (obj.filterOutNumbers === 'true')
            tempWords = filterOutNumber(tempWords)
        if (obj.sortAlphabetically === 'true')
            tempWords.sort()

        const filteredWords: Array<string> = obj.s ? searchbar(tempWords) : tempWords
        const res: Array<Array<string>> = []
        for (let i = 0; i < filteredWords.length; i += wordsPerPage) {
            const chunk: Array<string> = filteredWords.slice(i, i + wordsPerPage)
            res.push(chunk)
        }
        return res
    }


    function computePage(nextPage: boolean): void {
        const currentPage = Number(obj.page)

        if (formattedWords.length === 0) {
            obj.page = '2'
            return
        }
        if (nextPage === true) {
            if (currentPage !== formattedWords.length)
                obj.page = String(currentPage + 1)
        }
        else {
            if (currentPage !== 1)
                obj.page = String(currentPage - 1)
        }
        setSearchParams(obj)
    }

    const pageNumber: number = Number(obj.page) - 1 ? Number(obj.page) - 1 : 0

    return (
        <div>
            <div>
                {
                    formattedWords.length === 0 ? null : formattedWords[pageNumber].map(i => {
                        return <ListItem text={i}></ListItem>
                    })
                }
            </div>
            <div className="list-buttons">
                <Button onClickFunction={() => computePage(true)} text="Next page"></Button>
                <Button onClickFunction={() => computePage(false)} text="Previous page"></Button>
            </div>
        </div>
    )
}

export default List