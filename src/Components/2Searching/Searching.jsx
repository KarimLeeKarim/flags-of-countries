import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import Countries from '../3Countries/Countries';
const Searching = ({countries, inputTarget,choose}) => {
    return (
        <>
            <div id="main">
                <div className="searching">
                    <div className="search">
                        <SearchIcon className="fas fa-search" />
                        <input 
                        type="text" 
                        id="input" 
                        placeholder="Search for a country..."
                        onChange={inputTarget} />
                    </div>
                    <select 
                     selected 
                     id="regionsSelector"
                     onChange={choose}
                     >
                        <option selected disabled>Filter by Region</option>
                        <option>All</option>
                        <option>Africa</option>
                        <option>Asia</option>
                        <option>Europe</option>
                        <option>Oceania</option>
                    </select>
                </div>
                <Countries countries={countries}/>
            </div>
        </>
    )
}
export default Searching;
