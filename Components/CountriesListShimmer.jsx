import React from 'react'
import './CountriesListShimmer.css' 

export default function CountriesListShimmer() {

    // const array = new Array(10).fill(1)
    // console.log(array);

    // console.log(Array.from({length:10}));

  return (
    <>
      <div className="countries-container">
        {

            Array.from({length:10}).map((i) => {

                return <div className="country-card  shimmer-Card" key={i} >

                </div>
            })
        }
        
      </div>
    </>
  )
}
