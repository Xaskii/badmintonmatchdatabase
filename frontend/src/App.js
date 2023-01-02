import { Route, Routes } from 'react-router-dom'
import './App.css'
import MatchStack from './components/MatchStack'
import Login from './components/Login'
import Header from './components/Header'

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<MatchStack />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  )
}

export default App
