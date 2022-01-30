import React, {useState, useEffect} from 'react';
import axios from 'axios';

 function FlightData(props) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get(props.url)
      .then(res => {
        const flights = res.data;
        console.log(flights)
        props.setFlights(flights);
        setLoading(false);
      }).catch(e => {
          console.log(e);
          setLoading(false);
      })
  }, [props.url, props.setFlights]);
    

  
    return (
        <>
        {loading && (
            <p>loading...</p>
        )}
      <ul>
        {/* {
          props.flights
            .map(flight =>
              <li key={flight.id}>{flight.destination.city}</li>
              // Ana: we need the flights that are departing from & arriving to the city in question
            )
            
        } */}
      </ul>
      </>
    );

}

export default FlightData;