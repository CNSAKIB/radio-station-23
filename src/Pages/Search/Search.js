import React, { useState, useEffect } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';

const Search = () => {
    const [countryData, setCountryData] = useState([]);
    useEffect(() => {
        fetch('https://de1.api.radio-browser.info/json/stations/bycountrycodeexact/bd?limit=100')
            .then(res => res.json())
            .then(data => {
                if (data) {
                    setCountryData(data);
                    setCountryData(false);
                }
                else {
                    setCountryData(true);
                }
            })
    }, [])
    return (
        <div>
            <Container>
                <Row>
                    <Col><Form className="d-flex">
                        <Form.Control
                            type="text"
                            placeholder="Find by country"
                            className="me-2"
                            aria-label="Search"
                        />
                    </Form>
                    </Col>
                    <Col xs={5}><Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Find by language"
                            className="me-2"
                            aria-label="Search"
                        />
                    </Form></Col>
                    <Col><Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search by name"
                            className="me-2"
                            aria-label="Search"
                        />
                    </Form></Col>
                </Row>
            </Container>
        </div>
    );
};

export default Search;