import React from 'react'
import Img from './images/g4.jfif'

function Download() {
    return (
        <div>
           <img src={Img} alt="abc" /> 
            <a href={Img} download>Click Here to Download</a>
        </div>
    )
}

export default Download;
