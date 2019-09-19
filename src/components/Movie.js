import React from 'react';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Image from './Image';

const Movie = ({ Title, Year, imdbID, Poster, Type }) => {
    return (
        <div className='col-12 col-sm-6 col-md-3 col-lg-3 mb-5 d-flex justify-content-center'>
            <Card style={{ width: '18rem' }}>
                <Image src={Poster} title={Title} />
                <Card.Body>
                    <table>
                        <tbody>
                            <tr>
                                <td valign="top" className='font-weight-bold'>Name: </td>
                                <td>{Title}</td>
                            </tr>
                            <tr>
                                <td className='font-weight-bold'>Year: </td>
                                <td>{Year}</td>
                            </tr>
                            <tr>
                                <td className='font-weight-bold'>imdbID: </td>
                                <td>{imdbID}</td>
                            </tr>
                            <tr>
                                <td className='font-weight-bold'>Type: </td>
                                <td>{Type}</td>
                            </tr>
                        </tbody>
                    </table>
                </Card.Body>
            </Card>
        </div>
    )
}


Movie.defaultProps = {
    Title: '',
    Year: '',
    imdbID: '',
    Poster: '',
    Type: ''
};

Movie.propTypes = {
    Title: PropTypes.string,
    Year: PropTypes.string,
    imdbID: PropTypes.string,
    Poster: PropTypes.string,
    Type: PropTypes.string
};

export default Movie;
