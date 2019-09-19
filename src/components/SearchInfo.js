import React from 'react';
import PropTypes from 'prop-types';

const SearchInfo = ({ count, searchTerm }) => {
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

SearchInfo.defaultProps = {
    searchTerm: '',
    count: 0,
};

SearchInfo.propTypes = {
    searchTerm: PropTypes.string,
    count: PropTypes.number,
};

export default SearchInfo;