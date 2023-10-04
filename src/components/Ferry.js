import React, { useEffect, useState } from 'react'
import FerryCard from './FerryCard'
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';

function Ferry({serverEndpoint}) {
    /*
    The Ferry Module.

    This interface is responsible for displaying all ferry times by querying
    the MTA server side endpoints.
    */
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    let pageLoadCount = 0;

    useEffect(() => {
        const fetchData = async () =>{
            try{
                const endpoint = serverEndpoint + '/api/get-ferry-time'
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

        const min = 60
        const refreshWindow = (1/2)*min;
        const interval = refreshWindow*1000; //1000 is the constant
        const intervalId = setInterval(fetchData, interval);

        fetchData()

        // Cleanup to clear interval when component unmounts
        return () => {
            clearInterval(intervalId)
        };



      }, []);

  return (
    <div>
        {error ? (
            <p>Error: {error}</p>
        ) : ("")}
        {data? (
            <Card style={{'padding':'3%'}}>
                 <Card.Title style={{'fontSize':'25px', 'fontWeight':'800'}}>{data.data.station_name} Ferry</Card.Title>

                    {/* North Bound Trains */}
                    <ListGroup>
                        {data.data.ferry_times.map(items =>(
                            <ListGroup.Item>
                                <FerryCard
                                    time={items[3]}
                                    direction={items[1]}
                                />
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
          </Card>
        ): ("")}
    </div>
  )
}

export default Ferry
