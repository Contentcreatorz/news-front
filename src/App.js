
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { createContext, useState } from 'react';
import { Main } from './components/Main';


// export const SelectedCategoryContext = createContext();

function App() {
  const [username, setUsername] = useState('happyamy2016')
  const [selectedCategory, setSelectedCategory] = useState('')

  return (
    <BrowserRouter>
      <div className="App">
        {/* <SelectedCategoryContext.Provider value={selectedCategory}> */}
        <Header username={username} setSelectedCategory={setSelectedCategory} />
        <Main username={username} />
        {/* </SelectedCategoryContext.Provider> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
