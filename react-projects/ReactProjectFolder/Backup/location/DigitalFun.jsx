import React,{useState,useEffect} from 'react';

const DigitalFun = () => {
    let [clock,setClock] = useState(new Date().toLocaleTimeString());
    useEffect(()=>{
        setInterval(()=>{
            setClock(new Date().toLocaleTimeString())
        },1000)
    },[])
    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4'>
                        <div className='card'>
                            <div className='card-header'>
                                <h1>{clock}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DigitalFun
