import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';


function SerachItem() {

  const {  data } = useSelector((store) => store.engine);
    const {engineid}=useParams()
    const viewSingleData = data.filter((item) => Number(item.id) == Number(engineid));

  return (
    <div id='"detailed-result'>


            <div>
                <h2>ID NO- {engineid}</h2>
                {
                  
                  viewSingleData.map((e)=>
          (
              <div key={engineid} className='resultbox'>
              <h2>Title-  {e.title}</h2>
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

export default SerachItem