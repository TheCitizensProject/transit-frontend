import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TrainCard from './TrainCard';
import TramCard from './TramCard';

function Tram() {
    /*
    The Train Module.

    This interface is responsible for displaying all tram times by querying
    the server side endpoints.

    */
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    let pageLoadCount = 0;

    useEffect(() => {
        const fetchData = async () =>{
            try{
                const endpoint = 'http://localhost:8000/api/get-tram-time'
                const response = await fetch(endpoint)
                if (!response.ok){
                    throw new Error()
                }
                const responseData = await response.json()
                setData(responseData)
                setError(null)

            } catch (error){
                setError('An error occurred while fetching data')
                setData(null)
            }
        }
        //fetchData()

        if(pageLoadCount == 0){
            fetchData();
            console.log(pageLoadCount)
            pageLoadCount++;
        }
        else{
            console.log("after")
            console.log(pageLoadCount)
            const second = 60
            const min = (1/2)*second;
            const interval = min*1000; //1000 is the constant

            const intervalId = setInterval(fetchData, interval);
            //Cleanup to clear interval when component unmounts
            return () => {
                clearInterval(intervalId)
            };

        }



      }, [pageLoadCount]);

  return (
    <div>
        {error ? (
            <p>Error: {error}</p>
        ) : ("")}
        {data? (
            <Container fluid>
                 <p style={{'fontSize':'35px', 'fontWeight':'800'}}>{data.data.station_name} Tram</p>
                <Row>
                    <Col>
                        {data.data.tram_times.map(items =>(
                            <Row>
                                <TramCard
                                    time={items[1]}
                                    direction={items[0]}
                                />
                            </Row>
                        ))}
                    </Col>
                </Row>
          </Container>
        ): ("")}
    </div>
  )
}

export default Tram
