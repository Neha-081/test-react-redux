import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Search() {
    const [keyword,setKeyword]=useState("")
    
    const handleSearch=(e)=>{
        e.preventDefault();
        setKeyword(e.target.value.toLowerCase());
    }
    const searched=(keyword)=>(d)=>{
        d.title.toLowerCase().includes(keyword)
    }



  return (
    <div>
        {/* navbar */}
        <nav id='navbar' className="navbar navbar-expand-lg navbar-light ">
            <img className='logonav' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStFxuzptufscwaOKU8V9z3znpla9gRMxZYjQ&usqp=CAU" alt="" srcset="" />
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
       <Link to="/">HOME </Link>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={()=>handleSearch(searched)}/>
      <button className='search' className="btn btn-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>

{/* search result */}

    </div>
  )
}

export default Search