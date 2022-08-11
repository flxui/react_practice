import React from 'react';
import logo from './logo.svg';
import './App.css';
import Searchbar from './Searchbar'
import Button from './Button'
import { useSearchParams } from 'react-router-dom'

import List from './List'

function App() {

  let [searchParams, setSearchParams] = useSearchParams()


  function filterOutNumbers() {
    const obj = Object.fromEntries([...searchParams])
    obj.filter = 'letters-only'
    setSearchParams(obj)
  }

  return (
    <div className="App">
      <header className="App-header">
        <List itemsPerPage={10}></List>
        <Button text="Exclude numbers" onClickFunction={() => filterOutNumbers()} ></Button>
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
