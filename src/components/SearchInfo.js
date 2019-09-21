import React from 'react';
import PropTypes from 'prop-types';

const SearchInfo = ({ count, searchedKey, page, lastPage }) => {
    return (
        <div className='my-4 px-5'>
            <h4>
                You searched for:
                <span className='font-weight-bold text-muted'> {searchedKey}</span>,
                <span className='font-weight-bold text-muted'> {count} </span>results found, showing page
                <span className='font-weight-bold text-muted'> {page} of {lastPage} </span>
            </h4>
        </div>
    )
}

SearchInfo.defaultProps = {
    page: 1,
    searchedKey: 'batman',
    count: '0',
};

SearchInfo.propTypes = {
    page: PropTypes.number,
    lastPage: PropTypes.number,
    searchedKey: PropTypes.string,
    count: PropTypes.string,
};

export default SearchInfo;