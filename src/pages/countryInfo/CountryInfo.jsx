import './countryInfo.css'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import  axios from 'axios'

const CountryInfo = () => {

  const [info, setInfo] = useState([])
  const {countryCode } =useParams()
  useEffect(() => {
    getInfo()
    console.log(info);
  },[countryCode])
  const getInfo = () => {
    axios.get(`https://restcountries.com/v3.1/alpha/${countryCode}`)
    .then((res) => {
        console.log(res.data);
        setInfo(res.data)
    })
    .catch((error) => {
      console.log(error);
    })

  }
  return (
    <div className='container'>
      <Link to='/' className='goBtn'>
        Go Back
      </Link>
      {
        info.length > 0 &&  <div className='contain' style={{
          display:'flex',
         
          alignItems:'start',
          gap:'40px',
          margin:'20px 0'
        }}>
        <div>

          <img  src={info[0].flags.png} alt={info[0].flags.alt} style={{width:'400px'}} className='country-img' />
        </div>
        <div className='info'>
            <h2 style={{
              marginBottom:'20px'
            }}>{info[0].name.common} </h2>

            <div className="text"
            style={{display:'flex',gap:'40px', fontSize:'20px'}}>
            <div>
            <p>Native Name: <span>{info[0].name.nativeName[Object.keys(info[0].name.nativeName)[0]].official}</span></p>
            <p>Population: <span>{info[0].population}</span></p>
            <p>Region: <span>{info[0].region}</span></p>
            <p>Sub Region: <span>{info[0].subregion}</span></p>
            </div>

            
            <div>
            <p>Capital: <span>{info[0].capital}</span></p>
            <p>Top Level Domain: <span>{info[0].tld[0]}</span></p>
          
            <p>Languages: <span>{Object.values(info[0].languages).join(" ")}</span></p>
            </div>
        </div>

       {
        info[0].borders &&  <div style={{
          display:'flex',
          alignItems:'center',
          gap:'15px',
          marginTop:'40px',
          padding:'10px'
        }}>
        <p style={{fontWeight:'bold', fontSize:'20px'}}>Border Countries:</p>
        <div className='buts' style={{
          display:'flex',
          gap:'15px',
        }}>
        {
          info[0].borders?.map((item,index) => {
            console.log(item);
           return <Link key={index} to={`/${item}`}
           
           style={{
            backgroundColor:'#fff',
            color:'gray',
            padding:'10px',
            boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
           }}>{item}</Link>
          })
        }

        </div>
        
      </div>
       }

        </div>
      </div>

      }
     

    </div>
  )
}

export default CountryInfo