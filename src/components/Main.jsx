import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

function Main() {
    const handleKey=(e)=>{
        if(e.key==='Enter'){
           <Link to="/searchData">Search Data</Link>
        }
    }


  return (
    <div>
        <img className='logo' src="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/streams/2013/January/130108/1B5445835-google-logo.jpg" alt="Google" />
        <div>
        <input className='search-box' type="text" placeholder="Search Google" onKeyDown={handleKey}/>
        <button className='btn btn-warning'><Link to="/searchData">Enter</Link></button>
        </div>
        
    </div>
  )
}

export default Main