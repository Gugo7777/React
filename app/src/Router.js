import React, { useEffect, useState } from "react";
import axios from 'axios'

export default function Router() {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then((response) => setData(response.data))
    }, [])
    return (
        <div className="main"  >
            {data.map((item) => {
                return (
                    <div key={item.id}>
                        <img src={item.image} />
                        <p>{item.title} </p>
                        <p>{item.price} </p>
                        <span>{item.description} </span>
                        <hr/>
                        <button>See more</button>
                    </div>
                )
            })}
        </div>
    )
}