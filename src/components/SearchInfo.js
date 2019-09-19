import React from 'react'

export default function SearchInfo({ searchInfo }) {
    console.log({ searchInfo });
    return (
        <div className='my-5'>
            <h4>You searched for: Batman, {searchInfo} results found</h4>
        </div>
    )
}
