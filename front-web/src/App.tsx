import { useState } from 'react';
import './App.css';
import Filter from './components/Filter';
import Header from './components/Header';
import MainCard from './components/MainCard';

function App() {
  const [filterStore, setFilterStore] = useState<number>(0);

  const onFilterChange = (data: number) => {
    setFilterStore(data);
  };

  return (
    <>
      <Header />
      <div className="app-container container">
        <Filter onFilterChange={onFilterChange} />
        <MainCard filterStore={filterStore} />
      </div>
    </>
  );
}

export default App;
