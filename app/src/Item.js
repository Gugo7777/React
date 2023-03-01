import React, { Route, useEffect,useState } from "react";
import axios from "axios";
import { useParams , Link } from "react-router-dom";

export default function Item() {
    let obj = useParams()
    const[data,setData]=useState(null)
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products/'+obj.id)
            .then((res) => {
              console.log(res);
                setData(res.data)
            })
    }, [])


    return (
        <div className="x">
            <Link to={'/'}>home</Link>
          {data === null ? (
            <h1>Loading...</h1>
          ):(
            <>
            <img src={data.image}/>
                <h1>{data.title}</h1>
                <h2>{data.price}</h2>
                <p>{data.description}</p>
                <hr/>
            </>
          )}
        </div>
    )
}