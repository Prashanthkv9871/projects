import React,{useState,useEffect} from 'react'

export default function Message() {
    const [data,setData]=useState([]);
    useEffect(()=>{
    fetch('https://run.mocky.io/v3/9d71cb03-a9f9-4d70-bae2-9d3adaa1cfe7').then((res)=>res.json()).then((data)=>{setData(data)});
    },[])
    console.log(data);
    return (
        <div>
            <div>{data.map((user)=><li key={user.id}>{user.item_name}</li>)}</div>
        </div>
    )
}
