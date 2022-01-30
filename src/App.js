import logo from './logo.svg';
import './App.css';
import React, {useState, useRef, useMemo} from "react";
import FlightData from './components/FlightData.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Column, Button } from 'react-foundation';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Alert from "react-bootstrap/Alert";
import './myStyles.css';
import ScriptGraph from './components/scriptGraph.js';






function App() {
 
 


  <link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
  crossorigin="anonymous"
/>

  const [theUrl, settheUrl] = useState("https://tamuhack22project.herokuapp.com/flights?");
  const [flights, setFlights] = useState([]);
  const chartRef = useRef();

  const onSubmit = function (e) {
    e.preventDefault();
    const date = e.target.elements.date.value;
    var origin = document.getElementById("origins").value;
    settheUrl("https://tamuhack22project.herokuapp.com/flights?" + `date=${date}` + `&origin=${origin}`)
  }

  // useEffect(() => {
  //   const parsedFlights = flights.map(flight => ({
  //     departureTime: new Date(flight.departureTime).toLocaleTimeString(),
  //     arrivalTime: new Date(flight.arrivalTime).toLocaleTimeString(),
  //     destinationCity: flight.destination.city,
  //     originCity: flight.origin.city
  //   }));
  //   const pivot = new window.WebDataRocks({
  //     container: chartRef.current,
  //     toolbar: true,
  //     report: {
  //       dataSource: {
  //         data: parsedFlights
  //       }
  //     }
  //   });
  //   console.log(chartRef.current, pivot);
  // }, [theUrl, chartRef, flights])


  function AlertDismissibleExample() {
    const [show, setShow] = useState(true);
  
    if (show) {
      return (
        <Alert variant="danger" onClose={() => setShow(false)} dismissible>
          <Alert.Heading> {"On this day, the airport is the MOST crowded from " + (hourCounts.indexOf(Math.max.apply(Math, hourCounts))) + ":00:00 to " + (hourCounts.indexOf(Math.max.apply(Math, hourCounts))+1) + ":00:00"} </Alert.Heading>
          <p>
            Due to high covid cases, arriving at the airport during this time
             frame is NOT <br></br>reccomended. Instead, we reccomend trying to schedule
              your flight for another <br></br>time. Safe travels!
          </p>
        </Alert>
      );
    }
    return <Button onClick={() => setShow(true)}>Show Alert</Button>;
  }

  function AlertGoodExample() {
    const [show, setShow] = useState(true);
  
    if (show) {
      return (
        <Alert variant="success" onClose={() => setShow(false)} dismissible>
          <Alert.Heading> {"On this day, the airport is the LEAST crowded from " + (hourCounts.indexOf(Math.min.apply(Math, hourCounts))) + ":00:00 to " + (hourCounts.indexOf(Math.min.apply(Math, hourCounts))+1) + ":00:00"} </Alert.Heading>
          <p>
            Arriving at this time will help keep you safe
            from COVID, as the airport is the least <br></br>crowded during
            this time interval! Safe travels!
          </p>
        </Alert>
      );
    }
    return <Button onClick={() => setShow(true)}>Show Alert</Button>;
  }



  const hourCounts = useMemo(() => {
    const hours = [];
    for (let i=0;i<24;i++) {
      hours.push(0);
    }

    // looping through departures from airport
    for (const flight of flights) {
      const departureTime = new Date(flight.departureTime);
      let endHour = departureTime.getHours();
      let startHour = endHour - 2;
      
      for (let h=startHour; h<=endHour; h++) {
          hours[h] += 1;
        
        
      }
    }
    var min_of_array = Math.min.apply(Math, hours);
    var least_crowded_hour = hours.indexOf(min_of_array)
    var max_of_array = Math.max.apply(Math, hours);
    var max_crowded_hour = hours.indexOf(max_of_array)

    const busyTimes = [];
    busyTimes[0] = "On this day, the airport is the LEAST crowded from " + least_crowded_hour + ":00:00 to " + (least_crowded_hour + 1) + ":00:00";
    busyTimes[1] = "On this day, the airport is the MOST crowded from " + max_crowded_hour + ":00:00 to " + (max_crowded_hour + 1)  + ":00:00";
    console.log("HourCounts")
    console.log(hours)
    
    
    return hours;
  }, [flights])

  

  return (

    <div class="col-xs-5 col-xs-offset-3">
      <div style={{backgroundColor: '#C8A2C8', paddingLeft:'500px'}}>
      <Container className = "d-flex p-2">
      <Form onSubmit={onSubmit} className = "d-flex p-2">
        <Form.Group controlId="formName" className = "d-flex p-2">
          <label>
                Enter the Flight Date:
            <input type="date" name="date"/>
          </label>
            <Form.Label>Enter the Flight Origin</Form.Label>
            <Form.Control type="text" placeholder="Enter Origin Code (Ex: DFW)" id="origins" />
        </Form.Group>
  
          <Button as={Col} variant="warning" className="btn btn-primary btn-sm" type="submit">Find Flights</Button>
      </Form>
      
      
    </Container>
    </div>
      <>
      <div class="col-xs-5 col-xs-offset-3" style={{paddingLeft:'501px'}}>

     
       
        <ScriptGraph items={hourCounts}/>
        </div>
        
      </>
      <div>
      
      <div class="position-relative"><AlertDismissibleExample /></div>
      
      
      
      <div class="position-relative"><AlertGoodExample /></div>

      </div>

      <div>
      <FlightData url={theUrl} flights={flights} setFlights={setFlights}/>
    

      {/* <div display='none' style={{paddingTop:'500px'}} ref ={chartRef}></div> */}
      </div>
    </div>

      



    // Ana: we also need a form for the city they wanna fly from right?


      /* <select id = "yearSelect" onchange = "getSelectedYear()">
  <option value="2018">2018</option>x
  <option value="2019">2019</option>
  <option value="2020">2020</option>
  <option selected value="2021">2021</option>
</select>

<select id = "daySelect" onchange = "getSelectedYear()">
  <option value="2018">2018</option>
  <option value="2019">2019</option>
  <option value="2020">2020</option>
  <option selected value="2021">2021</option>
</select> */
      


    
  )



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}


export default App;
