import SurgeriesComponent from './components/SurgeriesComponent';
import SearchBarComponent from './components/SearchBarComponent';
import React from 'react';
import './App.css';

function App() {
  const [searchInput, setSearchInput] = React.useState(''); 
  return (
    <div className="App">
      <SearchBarComponent setSearchInput={setSearchInput}></SearchBarComponent>
      <SurgeriesComponent searchInput={searchInput} ></SurgeriesComponent>
    </div>
  );
}

export default App;
