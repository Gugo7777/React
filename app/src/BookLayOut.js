import React from "react";
import { Outlet } from "react-router-dom";



function BookLayOut() {
  return (
    <div> <h1>Only in books path</h1>

      <Outlet/>
    </div>
   
  )
}

export default BookLayOut