import React from 'react'
import menuData from './menuData'
import './Menu.css'
import { GrClose } from 'react-icons/gr'
import menu2 from './Menu2'

export default function Menu(props) {
  return (
    <div className="x">
      <div className='closeicon'>
        <GrClose className='button1' onClick={() => props.setOpen(false)} />
      </div>
      <div className='foricons'>
        {
          menuData.map((item) => {
            return (
              <div className='div251'>{item.icon} {item.text}</div>
            )
          })
        }

        <div className='div250'>
          {
            menu2.map((item) => {
              return (
                <>
                  <div>
                    <h4>Женщинам</h4>
                    <ul></ul>
                  </div>
                  <div className='div252'>
                    <img src=" " alt=''/>
                    <p className='pp1'>Пуховики</p>
                    <p>женские</p>
                  </div>
                </>
              )
            })
          }

        </div>
      </div>
    </div>

  )
}
