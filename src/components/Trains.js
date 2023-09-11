import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TrainCard from './TrainCard';

function Trains() {
    /*
    The Train Module.

    This interface is responsible for displaying all train times by querying
    the MTA server side endpoints.

        -------------------------------------------------------
        |  Station Name                                        |
        |                          |                           |
        |  F  NorthBound   2 mins  |   F  SouthBound   2 mins  |
        |  F  NorthBound   12 mins |   F  SouthBound   20 mins |
        |  F  NorthBound   23 mins |   F  SouthBound   25 mins |
        |                          |                           |
        -------------------------------------------------------
    */
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    let pageLoadCount = 0;

    useEffect(() => {
        const fetchData = async () =>{
            try{
                const endpoint = 'http://localhost:8000/api/get-station-time/B06'
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
                 <p style={{'fontSize':'35px', 'fontWeight':'800'}}>{data.data.station_name} Station</p>
                <Row>
                    {/* North Bound Trains */}
                    <Col>
                        {data.data.north_bound_trains.map(items =>(
                            <Row>
                                <TrainCard
                                    train={items[0]}
                                    time={items[1]}
                                    direction={data.data.north_bound_label}
                                />
                            </Row>
                        ))}
                    </Col>
                    {/* South Bound Trains */}
                    <Col>
                        {data.data.south_bound_trains.map(items =>(
                            <Row>
                                <TrainCard
                                    train={items[0]}
                                    time={items[1]}
                                    direction={data.data.south_bound_label}
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

export default Trains
