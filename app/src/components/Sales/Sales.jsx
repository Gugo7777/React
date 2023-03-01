import React from "react";
import './Sales.css'
import sales from './data';
export default function Sales(props) {
    const filterarray = sales.filter((item)=> {
        let z = props.text ? props.text : ''
        return item.title.toLowerCase().includes(z.toLowerCase())
        
        
    })
    return (
        <div className="sales">
            <h1>Хиты продаж</h1>
            <div className="salesmain">
                {
                    filterarray.map((item) => {
                        return (
                            <div className="boxes">
                                <img src={item.url} alt="" />
                                <span className="zexj">{item.zexj}</span>
                                <span className="price">{item.price}</span>
                                <p className="title">{item.title}</p>

                            </div>

                        )
                    })
                }


            </div>
        </div>
    )
}