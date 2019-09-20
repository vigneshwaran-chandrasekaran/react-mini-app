import React from 'react';
import PropTypes from 'prop-types';

const SearchInfo = ({ count, searchedKey }) => {
    console.log({ count });
    console.log({ searchedKey });
    return (
        <div className='my-4 px-5'>
            <h4>
                You searched for:
                <span className='font-weight-bold'> {searchedKey}</span>,
                <span className='font-weight-bold'> {count} </span>
                results found
            </h4>
        </div>
    )
}

SearchInfo.defaultProps = {
    searchedKey: 'batman',
    count: '0',
};

SearchInfo.propTypes = {
    searchedKey: PropTypes.string,
    count: PropTypes.string,
};

export default SearchInfo;