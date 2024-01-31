import React, { useState, useEffect } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import Station from '../Station/Station';
const Stations = () => {
    const [stations, setStations] = useState([]);
    const [loadingData, setLoadingData] = useState(true);
    useEffect(() => {
        fetch('http://de1.api.radio-browser.info/json/stations/topvote/100')
            .then(res => res.json())
            .then(data => {
                if (data) {
                    setStations(data);
                    setLoadingData(false);
                }
                else {
                    setLoadingData(true);
                }
            })
    }, [])
    return (
        <div>
            <h1 className="my-3 comp-title fs-1"><u>Radio Stations</u></h1>
            <h4>Total Stations: {stations.length}</h4>
            {
                loadingData && <Spinner animation="grow" />
            }
            <Row xs={1} sm={1} md={3} className="w-75 mx-auto mt-2 mb-4 pb-5 g-4">

                {stations.map(station => <Station
                    key={station.changeuuid}
                    station={station}
                ></Station>)}
            </Row>
        </div>
    );
};

export default Stations;