import React, { ChangeEvent, Component } from 'react'
import { useSearchParams } from 'react-router-dom'

// interface SearchbarProps {
//     text?: string
// }

function Searchbar() {
// function Searchbar(props: { text: string }) {
// function Searchbar(props: SearchbarProps) {

    let [searchParams, setSearchParams] = useSearchParams()

    function handleChange(event: React.FormEvent<HTMLInputElement>) {
        // console.log(event.currentTarget.value)
        const inputValue: string = event.currentTarget.value
        setSearchParams({ "s": inputValue })
    }

    return (
        <div>
            <form action="/">
                <input
                    type="text"
                    id="header-search"
                    placeholder="Search list"
                    onChange={handleChange}
                />
            </form>
        </div>
    )
}

export default Searchbar