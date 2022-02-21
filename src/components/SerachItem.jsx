
import { useParams } from 'react-router-dom'


function SerachItem() {
    const {engineid}=useParams()


  return (
    <div id='"detailed-result'>


            <div>
                <h2>ID NO- {engineid}</h2>
        <div className='title'>Title-</div>
        <div className='desc'>Description- </div>
        <div className='author'>Comapny Name</div>
        <div className='creation-date'>Creation Date</div>
        <div className='explicit'>Explicit</div>
        <div className='quality'>Quality</div>
            </div>
 

    
        
    </div>
  )
}

export default SerachItem