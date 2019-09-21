import React from 'react';
import Pagination from "react-js-pagination";

const PaginationControls = ({ pageOnChange, page, count }) => {
    return (
        <div className='d-flex flex-row justify-content-center flex-wrap mb-5'>
            <Pagination
                innerClass='pagination w-75 d-flex flex-row justify-content-center flex-wrap'
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
}

export default PaginationControls;