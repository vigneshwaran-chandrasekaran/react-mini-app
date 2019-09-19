import React from 'react';
import { Card } from 'react-bootstrap';

export default function Movie({ Title, Year, imdbID, Poster }) {
    // console.log({ Title });
    // console.log({ Year });
    return (
        <div className='col-12 col-md-3 mb-5'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={Poster} />
                <Card.Body>
                    <Card.Title>{Title}</Card.Title>
                    <Card.Text>
                        {Year} {imdbID} example text to build on the card title and make up the bulk of
                            the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}
