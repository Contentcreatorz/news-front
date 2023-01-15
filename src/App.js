import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Header } from './components/Header/header';
import { Main } from './components/main';
import { fetchUsers } from './utils/api';
import { Loading } from './components/loading';


function App() {
  const [username, setUsername] = useState('happyamy2016')
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchUsers().then((users) => {
      setUsers(users)
      setLoading(false)
    })
  }, [])

  if (loading) return (<Loading />)

  return (
    <BrowserRouter>
      <div className="App">
        <Header username={username} />
        <Main users={users} />
      </div>
    </BrowserRouter>
  );
}

export default App;
