import { useEffect, useState } from "react"
import Search from "../components/search/Search"
import axios from 'axios'
import Card from "../components/card/Card"
import './home.css'


const Home = () => {
  const [countries, setCountries] = useState([])
  const [valueSearch, setValueSearch] = useState('')
  const [filterValue, setFilterValue] = useState('')

const getSelectValue =(e) => {
  setFilterValue(e.target.value)
  
}
useEffect(() => {
  if (filterValue == 'no' || filterValue == '' ) {
    return
  }
  if( filterValue == 'all') {
     getallCountries()
  } else {
    getByResign(filterValue)
  }

},[filterValue])

const getByResign = (region) => {
  axios.get(`https://restcountries.com/v3.1/region/${region}`)
  .then((res) => {
    setCountries(res.data)
  })
  .catch(error => {
    console.log(error);
  })

}
  const getInputValue =(e) => {
    setValueSearch(e.target.value)
    } 

useEffect(() => {
  if(valueSearch !== '') {
    const timer = setTimeout(() => {
    displayData(valueSearch)
    }, 700);
    return () => clearTimeout(timer);
  } else {
    getallCountries()
  }
},[valueSearch]);

// display data from search
const displayData = (word) => {
    axios.get(`https://restcountries.com/v3.1/name/${word}`)
    .then((res) => {
      setCountries(res.data)
    })
    .catch(error => {
      console.log(error);
    })
}

    
  const getallCountries = ()=> {
    axios.get('https://restcountries.com/v3.1/all')
    .then((res) => {
      setCountries(res.data)
    })
    .catch(error => {
      console.log(error);
    })
  }
  return (
    <>
    <Search getInputValue={getInputValue} valueSearch={valueSearch}
    getSelectValue={getSelectValue} />
    <div className="cards container">
      {countries.map((country, index) => {
        return <Card country={country} key={index}/>
      })}
    </div>
 
    </>
  )
}

export default Home