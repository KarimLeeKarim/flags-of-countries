import React, { Component } from 'react';
import Navbar from '../Components/1Navbar/Navbar.jsx'
import Searching from '../Components/2Searching/Searching.jsx';
import CountryDetailed from '../Components/3Countries/CountryDetailed.jsx';
// import BorderCountry from '../Components/3Countries/BorderCountry.jsx';
import { Switch, Route } from 'react-router-dom'
import '../Assets/sass/main.scss';

class App extends Component {
    state = {
        CountryDataBasa: [],
        inputOfValue: '',
        choosenRegion: '',
        dark: false,
    }

    darkMode = () => {
        if (this.state.dark) {
            document.body.classList.add('darkmode');
        }
        else {
            document.body.classList.remove('darkmode');
        }
        this.setState({
            dark: !this.state.dark,
        })

    }


    componentDidMount() {
        this.fetchData();
    }

    input = async (e) => {
        await this.fetchData();
        const res = e.target.value
        let filtered = this.state.CountryDataBasa.filter(databasa => {
            return databasa.name.toLowerCase().includes(res) || databasa.name.includes(res)
        })
        this.setState({
            CountryDataBasa: filtered,
        })

    }

    choosenRegion = (e) => {
        const clickedRegionWord = e.target.options[e.target.selectedIndex].text
        this.setState({
            choosenRegion: clickedRegionWord,
        })
        this.fetchByRegion(clickedRegionWord);
    }

    fetchData = async () => {
        let response = await fetch("https://restcountries.eu/rest/v2/all")
        let countriesDataBase = await response.json();
        this.setState({
            CountryDataBasa: countriesDataBase,
        })
    }

    fetchByRegion = async (region) => {
        let response2 = await fetch(`https://restcountries.eu/rest/v2/region/${region}`)
        let showRegion = await response2.json();
        region === "All" ? this.fetchData() : this.setState({ CountryDataBasa: showRegion })
    }

    render() {
        return (
            <>
                <Navbar
                    darkMode={this.darkMode}
                    statusOfMode={this.state.dark} />
                <Switch>
                    <Route exact path="/">
                        <Searching
                            countries={this.state.CountryDataBasa}
                            inputTarget={this.input}
                            choose={this.choosenRegion}
                        />
                    </Route>
                    <Route
                        exact path="/country/:id"
                        location={this.props.location}
                        render={(props) => (
                            <CountryDetailed {...props}
                                alldata={this.state.CountryDataBasa} />
                        )}
                    />
                    {/* <Route path="/country/:id" >
                        <BorderCountry
                        alldata={this.state.CountryDataBasa} />
                    </Route> */}

                </Switch>
            </>
        );
    }
}

export default App;
