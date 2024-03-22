import { useEffect, useState } from 'react'
import CountryCard from './CountryCard'
import CountriesListShimmer from './CountriesListShimmer'
// import CountriesData from '../CountriesData'


export default function CountriesList({query}) {

  const [CountriesData,setCountriesData] = useState([]) 
  console.log(CountriesData);

  useEffect(() => {

  fetch('https://restcountries.com/v3.1/all')
  .then((res) => res.json())
  .then((data) =>  {

    setCountriesData(data)

  })
    
  },[])

  return (
    <>
        {

          !CountriesData.length ? ( <CountriesListShimmer /> ) : (

            <div className="countries-container">
          {
            CountriesData.filter((country) => 

              country.name.common.toLowerCase().includes(query) || country.region.toLowerCase().includes(query)
          
            ).map((country) => {

              return (

                <CountryCard 
                      name={country.name.common} 
                      population={country.population.toLocaleString('en-IN')}
                      region = {country.region}
                      flag = {country.flags.svg}
                      capital = {country.capital?.[0]}
                      data = {country}
              
                      />
              )
            })
          }
        </div>
        )
        }
        
    </>
  )
}
