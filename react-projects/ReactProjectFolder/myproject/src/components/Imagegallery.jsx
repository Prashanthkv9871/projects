import React,{useEffect, useState} from 'react';
import Axios from 'axios';

function Imagegallery() {
    let [data,setData]=useState([]);

    const imageHandler=()=>{
        Axios.get('https://jsonplaceholder.typicode.com/photos')
        .then(res=>{
            setData(res.data);
            //console.log(res.data);
        }).catch(err=>{
            console.log(err);
        })
    }

    useEffect(imageHandler,[]);

    return (
        <>
        <div className="row">
            {data.map(image=>{
                return(<div key={image.id}><img src={image.url} alt="" height="100px" width="100px"/></div>)  
            })}
        </div>
            
        </>
    )
}

export default Imagegallery
