
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import { useState } from 'react';
import { Header } from './components/Header/header';
import { Main } from './components/main';


function App() {
  const [username, setUsername] = useState('happyamy2016')
  const [selectedCategory, setSelectedCategory] = useState('')

  return (
    <BrowserRouter>
      <div className="App">
        <Header username={username} setSelectedCategory={setSelectedCategory} />
        <Main username={username} />
      </div>
    </BrowserRouter>
  );
}

export default App;
