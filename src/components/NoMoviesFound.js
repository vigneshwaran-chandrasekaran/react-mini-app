import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';

const NoMoviesFound = () => {
    return (
        <Jumbotron className='my-5'>
            <Container>
                <h1>No movie found <span role="img" aria-label='Emoji'>😔</span></h1>
                <p>
                    Please modify your search term.
                </p>
            </Container>
        </Jumbotron>
    )
}

export default NoMoviesFound;