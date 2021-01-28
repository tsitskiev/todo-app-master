import React from 'react'
import './Loader.css'

function Loader () {
    return (
    <div style={{display: 'flex', justifyContent: 'center', margin: '0.5rem'}}>
        <div className="lds-default">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
)}

export default Loader