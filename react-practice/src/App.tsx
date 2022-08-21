import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Searchbar from './Searchbar'
import Button from './Button'
import { useSearchParams } from 'react-router-dom'

import List from './List'

function App() {

    let [searchParams, setSearchParams] = useSearchParams()
    const obj = Object.fromEntries([...searchParams])

    useEffect(() => {
        const obj = Object.fromEntries([...searchParams])
        obj.page = '1'
        setSearchParams(obj)
    }, [])

    function filterOutNumbers() {
        obj.filterOutNumbers = 'true'
        setSearchParams(obj)
    }

    function sortAlphabetically() {
        obj.sortAlphabetically = 'true'
        setSearchParams(obj)
    }

    function removeFilters() {
        delete obj.sortAlphabetically
        delete obj.filterOutNumbers
        setSearchParams(obj)
    }

    return (
        <div className="App">
            <header className="App-header">
                <List></List>
                <Button text="Filter Out Numbers" onClickFunction={() => filterOutNumbers()} ></Button>
                <Button text="Sort Alphabetically" onClickFunction={() => sortAlphabetically()} ></Button>
                <Button text="Remove Filters" onClickFunction={() => removeFilters()} ></Button>
                <Searchbar></Searchbar>
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
