import React from 'react';
import { Image } from 'react-bootstrap';
import img from '../../page-under-construction-icon.jpg'
const Favourites = () => {
    return (
        <div>
            <h1>This is Favourites Page</h1>
            <Image src={img} fluid />
        </div>
    );
};

export default Favourites;