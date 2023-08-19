
import Navbar from './components/navbar/Navbar'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CountryInfo from './pages/countryInfo/CountryInfo'
function App() {


  return (
    <>
     <Navbar/>
    
    <Routes>
      <Route path='/' element={<Home/>}/>
    <Route path='/:countryCode' element={<CountryInfo/>}/>
   
    </Routes>
    </>
  )
}

export default App
