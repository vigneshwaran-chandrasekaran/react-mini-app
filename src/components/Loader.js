import React from 'react';
import PropTypes from 'prop-types';

function Loader({ loader }) {
    return (
        loader ? <div className="loader-line"></div> : null
    )
}

Loader.defaultProps = {
    loader: false,
};

Loader.propTypes = {
    loader: PropTypes.bool,
};

export default Loader;
