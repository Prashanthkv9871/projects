import React from 'react'

const Card = () => {
    const [data,setData] = React.useState([]);
    React.useEffect(()=>{
        fetch('https://food-itema-default-rtdb.firebaseio.com/telugu-skillhub-api/-MsE8GfWtRjc8x_t8pCC.json').then(response=> response.json()).then(json=> {
            setData(json.items);
        })
    },[])
    return (
        <div>
            <center>
                {data.length>0 ? 
                <div className='container'>
                    <div className='row'>
                        {data.map((item) =>(
                            <div className='col-md-4' style={{padding:"10px"}} key={item.id}>
                                <div className='card' style={{width:"18rem",padding:"3px"}}>
                                    <img src={item.url} className='card-img-top' alt=""/>
                                    <div className='card-body'>
                                        <h5 className='card-title'>{item.name}</h5>
                                        <h6 className='card-text'>Rs. {item.prize}</h6>
                                        <button className='btn btn-primary'>Order</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>:
                <div className='spinner-border text-primary'></div>
                }
            </center>
        </div>
    )
}

export default Card;
