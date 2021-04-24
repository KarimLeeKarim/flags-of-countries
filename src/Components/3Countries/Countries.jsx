import React from 'react'
import { NavLink } from 'react-router-dom';

const Countries = ({ countries }) => {
    return (
        <div  id="countries">
            {countries.map(data => (
                <NavLink to={`/country/${data.name}`} key={data.alpha2Code}>
                    <div className="card">
                        <img src={data.flag} width="286px" height="190px" className="card-img-top" alt="flag"/>
                        <div className="card__body">
                            <h5 className="card-title">{data.name}</h5>
                            <p className="card-text">Population: {data.population}</p>
                            <p className="card-text">Region: {data.region}</p>
                            <p className="card-text">Capital: {data.capital}</p>
                        </div>
                    </div>
                </NavLink>
            ))}
        </div>
    )
}


export default Countries;
