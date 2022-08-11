import React, { ChangeEvent, Component } from 'react'
import { useSearchParams } from 'react-router-dom'


// interface SearchbarProps {
//     text?: string
// }

function Searchbar() {
    // function Searchbar(props: { text: string }) {
    // function Searchbar(props: SearchbarProps) {

    let [searchParams, setSearchParams] = useSearchParams()
    const obj = Object.fromEntries([...searchParams])

    function handleChange(event: React.FormEvent<HTMLInputElement>) {
        obj.s = event.currentTarget.value
        setSearchParams(obj)
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