import React from 'react'

export default function Loader({ loader }) {
    return (
        loader ? <div className="loader-line"></div> : null
    )
}
