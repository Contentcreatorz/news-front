import { BrowserRouter } from 'react-router-dom';
import { Header } from './components/Header/header';
import { Main } from './components/article';
import './App.css';

function App() {
  // const [username, setUsername] = useState('happyamy2016')
  const username = 'happyamy2016';
  
  return (
    <BrowserRouter>
      <div className="App">
        <Header username={username}  />
        <Main  username={username} />
      </div>
    </BrowserRouter>
  );
}

export default App;
