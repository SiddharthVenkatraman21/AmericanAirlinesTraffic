import Plot from 'react-plotly.js';
import React from 'react';

    function ScriptGraph(props){

        console.log(props);
        console.log(props.items.length)

        


        // const timedata = [props.items];

       {
             {
              return (
                <Plot
                  data={[
                    {
                        type: 'bar',
                        x: ["12am","1am","2am","3am","4am","5am","6am","7am","8am","9am","10am","11am","12pm","1pm","2pm","3pm","4pm","5pm","6pm","7pm","8pm","9pm","10pm","11pm"],
                        y: props.items,
                        marker: {
                            color: '#C8A2C8',
                            line: {
                                width: 3
                            }
                        }
                    },
                  ]}
                  layout = { {
                    title: 'Airport Foot-Traffic Meter',
                    font: {size: 18},
            
                        yaxis: {
                            autorange: true,
                            showgrid: false,
                            zeroline: false,
                            showline: false,
                            autotick: true,
                            ticks: '',
                            showticklabels: false
                        }}
                    }
                />
              );
            }
          }
        }








       

        // var trace1 = {
        //     type: 'bar',
        //     x: ["12am","1am","2am","3am","4am","5am","6am","7am","8am","9am","10am","11am","12pm","1pm","2pm","3pm","4pm","5pm","6pm","7pm","8pm","9pm","10pm","11pm"],
        //     y: timedata,
        //     marker: {
        //         color: '#C8A2C8',
        //         line: {
        //             width: 3
        //         }
        //     }
        // };
        
        // var data = [ trace1 ];

        // var layout = { 
        // title: '',
        // font: {size: 18},

        //     yaxis: {
        //         autorange: true,
        //         showgrid: false,
        //         zeroline: false,
        //         showline: false,
        //         autotick: true,
        //         ticks: '',
        //         showticklabels: false
        //     }
        // };

        // var config = {responsive: true}
        // return(

        // Plotly.newPlot('myDiv', data, layout, config ))}
        

    export default ScriptGraph;