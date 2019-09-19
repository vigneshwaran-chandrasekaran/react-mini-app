import React from 'react'

export default function SearchInfo({ count, searchTerm }) {
    return (
        <div className='my-4 px-5'>
            <h4>
                You searched for:
                <span className='font-weight-bold'> {searchTerm}</span>,
                <span className='font-weight-bold'> {count} </span>
                results found
            </h4>
        </div>
    )
}
