import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
const Station = (props) => {
    const { changeuuid, name, url_resolved, country, votes } = props.station;

    const Player = () => (
        <AudioPlayer
            autoPlay
            src={url_resolved}
            onPlay={e => console.log("onPlay")}
        />
    );
    return (
        <Col>
            <Card data-aos="zoom-in-down" className="single-card">
                <Card.Body>
                    <Card.Title className="fw-bold fs-3">{name}</Card.Title>
                    <Card.Text>
                        <span className="p-4 fw-bold"> <span className="text-secondary m-2"></span>{country} </span> <br />
                        <span className="fw-bold"><span className="text-secondary">Votes</span> {votes}</span>
                        <br />
                        <span className="mt-4 fw-bold">  <span className="text-secondary m-2"></span>{changeuuid}</span>
                        <br />
                        <Button className="mt-3 book-btn" variant="primary" onClick={Player}>Play Now <i className="fas fa-arrow-right"></i></Button>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Station;