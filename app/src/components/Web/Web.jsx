import React, { useState } from "react";
import nkar1 from '../../image/russianflag.jpg'
import { GoLocation } from 'react-icons/go'
import { AiOutlineMenu, AiOutlineCamera } from 'react-icons/ai'
import nkar2 from '../../image/wb_logo_st_valentine_2023.png'
import { MdLocationPin } from 'react-icons/md'
import { BiUser, BiSearch } from 'react-icons/bi'
import { FaShoppingCart } from 'react-icons/fa'
import './Web.css'
import Menu from '../Menu/Menu'

function Web(props) {
    const [open, setOpen] = useState(false)
    return (
        <div className="header">
            <div className="firstheader">
                <div className="valut">
                    <img src={nkar1} alt="" />
                    <span>RUB</span>
                </div>
                <p>
                    <GoLocation />
                    Moscow
                </p>
                <a href="@" className="a1">Sell on Wildberries</a>
                <a href="@" className="a2">Job on Wildberries</a>
            </div>
            <div className="secondheader">
                <p>
                    <AiOutlineMenu className="menu" onClick={()=> setOpen(true)}/>

                </p>
                <img src={nkar2} alt="" className="nkar2" />
                <div className="inp-parent">

                    <BiSearch className="searchicon" />
                    <input onChange={(e)=> {
                        props.setText(e.target.value)
                    }} type='search' className="search" placeholder="Search">
                        
                    </input>
                    <AiOutlineCamera className="cameraicon" />
                </div>

                <div className="headericons">
                    <MdLocationPin className="location" />
                    <p className="p1">Address</p>
                </div>
                <div className="headericons">
                    <BiUser className="user"></BiUser>
                    <p className="p1">Log In</p>
                </div>
                <div className="headericons">
                    <FaShoppingCart class="shop" />
                    <p className="p1">Card</p>
                </div>
            </div>

            <dialog className='dialoge' open={open}>
                <Menu setOpen={setOpen} />
            </dialog>
        </div>

    )
}

export default Web;