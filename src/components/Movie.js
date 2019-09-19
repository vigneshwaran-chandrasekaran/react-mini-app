import React from 'react';
import { Card } from 'react-bootstrap';

export default function Movie({ Title, Year, imdbID, Poster, Type }) {
    // console.log({ Title });
    // console.log({ Year });
    return (
        <div className='col-12 col-sm-6 col-md-4 col-lg-3 mb-5 d-flex justify-content-center'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={Poster} />
                <Card.Body>
                    {/* <Card.Title>{Title}</Card.Title> */}
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
                    {/* <Card.Text>
                        <div>Name: {Title}</div>
                        <div>Year: {Year}</div>
                        <div>imdbID: {imdbID}</div>
                        <div>Type: {Type}</div>
                    </Card.Text> */}
                </Card.Body>
            </Card>
        </div>
    )
}
