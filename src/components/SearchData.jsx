import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getDataSuccess } from '../store/actions';
import Search from './Search';
import '../App.css'
import { Link } from 'react-router-dom';

function SearchData() {

    const {  data } = useSelector((store) => store.engine);
        const [datas,setDatas]=useState()
    const dispatch=useDispatch()

useEffect(()=>{
    getDataEngine()
},[])

    const getDataEngine=()=>{
        axios.get("http://localhost:3001/engine").then(({data})=>{
            dispatch(getDataSuccess(data))
   
        })
    }

    const qualityAsc=()=>{
        
        setDatas(()=>{
            return [...data.sort((a,b)=>{
               return +a.quality- +b.quality
            })]
        })
    }
    const qualityDesc=()=>{
        
        setDatas(()=>{
            return [...data.sort((a,b)=>{
               return +b.quality- +a.quality
            })]
        })
    }

    const dateAsc=()=>{
        
        setDatas(()=>{
            return [...data.sort((a,b)=>{
               return +a.creation_date- +b.creation_date
            })]
        })
    }
    const dateDesc=()=>{
        
        setDatas(()=>{
            return [...data.sort((a,b)=>{
               return +b.creation_date- +a.creation_date
            })]
        })
    }
function strings(a,b){
    a=a.toLowerCase()
    b=b.toLowerCase()
    return (a<b) ? -1 : (a>b)
}

    const titleAsc=()=>{
        
        setDatas(()=>{
            return [...data.sort((a,b)=>{
          return strings(a.title,b.title)
            }
         
            )]
        })
    }
    

    const titleDesc=()=>{
        
        setDatas(()=>{
            return [...data.sort((a,b)=>{
          return strings(b.title,a.title)
            }
         
            )]
        })
    }
    const explicit=()=>{
        
        setDatas(()=>{
            return [...data.filter((a)=>{
                return a.explicit=true
            })]
        })
    }
  return (
   
    <div>
         <Search/>


         <div>
    <div>
        <h3>Sort by title</h3>
        <button className='btn btn-primary' onClick={()=>titleAsc()}>ASC</button>
        <button className='btn btn-warning' onClick={()=>titleDesc()}>DESC</button>
    </div>
    <div>
        <h3>Sort by Date</h3>
        <button className='btn btn-primary' onClick={()=>dateAsc()}>ASC</button>
        <button className='btn btn-warning' onClick={()=>dateDesc()}>DESC</button>
    </div>
    <div>
        <h3>Sort by quality</h3>
        <button className='btn btn-primary' onClick={()=>qualityAsc()}>ASC</button>
        <button className='btn btn-warning' onClick={()=>qualityDesc()}>DESC</button>
    </div>
    <div>
        <h3>Filter Explicit</h3>
        <button className='btn btn-danger' onClick={()=>explicit()}>Filter</button>
    </div>
<div id = "search-result" >
    <div className='result'></div>
 
</div>
    </div>
    <div >
      {
          data.map((e)=>(
              <div key={e.id} className='resultbox'>
              <h1>ID- {e.id}</h1>
              <h2>Title-  <Link to={`/engine/${e.id}`}> {e.title}</Link></h2>
              <h3>Author- {e.author}</h3>
              <h4>{e.description}</h4>
              <a href={e.url}>{e.url}</a>
              <h3>Date- {e.creation_date}</h3>
              <h2>Quality- {e.quality}</h2>
             
              <h4>explicit- {e.explicit ? "TRUE" : "FALSE"}</h4>
              </div>
          ))
      }
      </div>
    </div>
  )
}

export default SearchData