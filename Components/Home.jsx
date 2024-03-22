import SearchBar from './SearchBar'
import SelectMenu from './SelectMenu'
import CountriesList from './CountriesList'
import { useState } from 'react'
import { useTheme } from '../Hooks/useTheme'

export default function Home() {


  const [query,setquery] = useState('')
  const [isDark] = useTheme()

  return (
    <>
     <main className={`${isDark ? 'dark' : ''}`} >
          <div className="search-filter-container">
            <SearchBar setquery={setquery} />
            <SelectMenu setquery={setquery} />
          </div>
          {
           query === 'unmount' ? '' : <CountriesList query={query} />
          }
        </main> 
    </>
  )
}
