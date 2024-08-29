import React from 'react'
import Search from '../Search/Search'
import '../../static/nav.css'

const Nav = () => {
  return (
    <div className='my-nav d-flex justify-content-between align-items-center flex-row' style={{width:"100%", backgroundColor:"#13315C"}}>
      <h2 style={{fontFamily:"New Amsterdam", fontWeight:"500", color:"#EEF4ED", fontSize:"64px", flexBasis:"50%", width:"100%", marginLeft:"35px", marginTop:"5px"}}>Product Dashboard</h2>
      <Search/>
    </div>
  )
}

export default Nav
