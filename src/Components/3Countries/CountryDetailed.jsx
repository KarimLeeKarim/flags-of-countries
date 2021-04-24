import React, { Component } from 'react';
import ReplyIcon from '@material-ui/icons/Reply';
import { NavLink, Link } from 'react-router-dom';

class CountryDetailed extends Component {
    state = {
        selCountry: {},
    }

    componentDidMount() {
        let match = this.props.match.params.id
        this.fetchData(match);
 
    }

    componentDidUpdate(){
        this.fetchData(this.props.match.params.id);
    }

    shouldComponentUpdate(nextProps, nextState){
        return nextProps.match.params.id != this.props.match.params.id || nextState.selCountry.name != this.state.selCountry.name;
    }

    fetchData = async (id) => {
        const response = await fetch(`https://restcountries.eu/rest/v2/name/${id}`)
        const [country] = await response.json();
        let res = await fetch("https://restcountries.eu/rest/v2/all")
        let countriesDataBase = await res.json();
        this.setState({
            alldata: countriesDataBase,
            selCountry: country
        })
    }

    getCountryByCode = (code) => {
        const country = this.state.alldata.find(c => c.alpha3Code === code);
        return country ? country.name : ''
    }
    
    render() {
        const { selCountry } = this.state;
        if(!selCountry.name) return <div>Loading...</div>
        return (
            <>  
                        <section id='city'>
                            <button id="back"><NavLink to="/"><ReplyIcon className="fas fa-long-arrow-alt-left" />Back</NavLink></button>
                            <div className="city__info">
                                <div className="image">
                                    <img src={selCountry.flag} className="card-img-top" alt={selCountry.flag} />
                                </div>
                                <div className="countrInfo">
                                    <h2>{selCountry.name}</h2>
                                    <div className="countrInfo__info">
                                        <div className="info__first">
                                            <p className="p"><span>Native name</span>: {selCountry.name}</p>
                                            <p className="p"><span>Population</span>: {selCountry.population}</p>
                                            <p className="p"><span>Region</span>: {selCountry.region}</p>
                                            <p className="p"><span>Sub Region</span>: {selCountry.subregion}</p>
                                            <p className="p"><span>Capital</span>: {selCountry.capital}</p>
                                        </div>
                                        <div className="info__second">
                                            <p className="p"><span>Top Level Domain</span>: {selCountry.topLevelDomain}</p>
                                            <p className="p"><span>Currencies</span>: {selCountry.currencies[0].code}</p>
                                            <p className="p"><span>Languages</span>: {selCountry.region}</p>
                                        </div>
                                    </div>
                                    <div className="borderr">
                                        <p className="p"><span>Border Countries :</span>{selCountry.borders.map(border => (
                                            <button><NavLink to={`/country/${this.getCountryByCode(border)}`}>{border}</NavLink></button>
                                        ))}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>
                
            </>
        )
    }
}

export default CountryDetailed
