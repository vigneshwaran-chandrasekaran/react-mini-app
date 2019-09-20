import React from 'react';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Image from './Image';

const Movie = ({ Title, Year, imdbID, Poster, Type }) => {
    return (
        <div className='col-12 col-sm-6 col-md-3 col-lg-3 mb-5 d-flex justify-content-center movie'>
            <Card style={{ width: '18rem' }}>
                <Image src={Poster} title={Title} />
                <Card.Body>
                    <div className='movie-name'>
                        {Title}
                    </div>
                    <div className='d-flex justify-content-between my-2'>
                        <div className='d-flex justify-content-start'>
                            <span class="badge badge-warning movie-i mr-2"
                                data-toggle="tooltip" title="Release year">{Year}</span>
                            <span data-toggle="tooltip" title="Film genre">{Type}</span>
                        </div>
                        <div class="badge badge-info movie-i" data-toggle="tooltip" title="IMDb ID">{imdbID}</div>
                    </div>

                    <table>
                        <tbody>
                            {/* <tr>
                                <td valign="top" className='font-weight-bold'>Name: </td>
                                <td>{Title}</td>
                            </tr> */}
                            {/* <tr>
                                <td className='font-weight-bold'>Year: </td>
                                <td>{Year}</td>
                            </tr> */}
                            <tr>
                                <td className='font-weight-bold'>IMDb ID: </td>
                                <td>{imdbID}</td>
                            </tr>
                            {/* <tr>
                                <td className='font-weight-bold'>Type: </td>
                                <td>{Type}</td>
                            </tr> */}
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
