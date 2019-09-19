import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Image = ({ src, title }) => {

    const [path, setPath] = useState(src);

    const handleOnError = () => {
        // if image not loading, this function will load placeholder image
        setPath('https://dummyimage.com/200x200/ccc/d6d6d6');
    };

    return (
        <div className='image-box'>
            <img
                className='card-img-top'
                src={path}
                alt={title}
                onError={handleOnError} />
        </div>
    )
};

Image.defaultProps = {
    src: 'https://dummyimage.com/200x200/ccc/d6d6d6',
    title: 'information',
};

Image.propTypes = {
    src: PropTypes.string,
    title: PropTypes.string,
};

export default Image;