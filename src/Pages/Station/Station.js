import React from 'react';
import { Card, Col } from 'react-bootstrap';
import img from '../../../src/radio_logo.jpg'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import './Station.css'
const Station = (props) => {
    const { changeuuid, name, url, url_resolved, country, votes, favicon, language } = props.station;
    return (
        <Col>
            <Card data-aos="zoom-in-down" className="single-card">
                <Card.Img className="img-container" variant="top" src={favicon ? favicon : img} />
                <Card.Body>
                    <Card.Title className="fw-bold fs-3">{name}</Card.Title>
                    <Card.Text>
                        <span className="p-4 fw-bold"> <span className="text-secondary m-2"></span>Country: {country ? country : "Unknown Country"} </span> <br />
                        <span className="mt-4 fw-bold">  <span className="text-secondary m-2"></span>Language: {language ? language : "Unknown Language"}</span>
                        <br />
                        <br />
                        <span className="fw-bold text-white" style={{ backgroundColor: 'coral' }}><span>Votes</span> {votes}</span>
                        <br />
                    </Card.Text>

                    <AudioPlayer
                        src={url_resolved ? url_resolved : url}
                        showJumpControls={false}
                        layout="stacked"
                        customProgressBarSection={[]}
                        showSkipControls={true}
                        customControlsSection={["ADDITIONAL_CONTROLS", "MAIN_CONTROLS", "VOLUME_CONTROLS"]}
                        autoPlayAfterSrcChange={false}
                    />

                </Card.Body>
            </Card>
        </Col>
    );
};

export default Station;