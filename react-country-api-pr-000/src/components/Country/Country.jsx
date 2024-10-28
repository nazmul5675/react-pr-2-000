import { useState } from 'react';
import '../Country.css'
import CountryDetails from '../Country Details/CountryDetails';
const Country = ({ country, handleVisitedCountry }) => {
    const { name, flags, population, area, cca3 } = country;


    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        setVisited(!visited);
    }

    const passWithParams = () => handleVisitedCountry(country);


    return (
        <div className={`country ${visited && 'visited'}`}>
            {/* class name={`country` ${visited ? 'visited' : 'non-visited'}} */}
            <h3 style={{ color: visited ? 'black' : 'orange' }}>name : {name?.common}</h3>
            <img src={flags.png} alt="flags" />
            <p>population:
                {population}
            </p>
            <p>area:{area}</p>
            <p>code: {cca3}</p>
            <button onClick={passWithParams}>mark visited</button>
            <br />

            <button onClick={handleVisited}>{visited ? 'Visited' : 'Not Visited'}</button>

            {
                visited ? 'i have visited' : 'i want to visit'
            }
            <hr />
            <CountryDetails country={country}></CountryDetails>
        </div>
    );
};

export default Country;