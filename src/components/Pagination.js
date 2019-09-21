import React from 'react';
import Pagination from "react-js-pagination";
import PropTypes from 'prop-types';

const PaginationControls = ({ pageOnChange, page, count }) => {
    return (
        <div className='d-flex flex-row justify-content-center flex-wrap shadow-none p-3 bg-light rounded'>
            <Pagination
                innerClass='pagination w-75 d-flex flex-row justify-content-center flex-wrap m-0'
                activePage={page}
                itemsCountPerPage={10}
                totalItemsCount={count}
                pageRangeDisplayed={10}
                onChange={pageOnChange}
                linkClass='m-1 btn btn-info'
                activeLinkClass='active'
                hideDisabled={true}
            />
        </div>
    )
};

PaginationControls.defaultProps = {
    page: 1,
};

PaginationControls.propTypes = {
    page: PropTypes.number,
    count: PropTypes.string,
    pageOnChange: PropTypes.func,
};


export default PaginationControls;