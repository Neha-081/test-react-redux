import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {incCount,decCount} from '../store/actions'

export const Counter=()=>{
    const count=useSelector((store)=>store.count)
const dispatch=useDispatch()
  return (
    <div className="App">
     count:{count}
     <button onClick={()=>{
       dispatch(incCount(1))
     }}>Add 1</button>
       <button onClick={()=>{
       dispatch(decCount(1))
     }}>Delete 1</button>
    </div>
  );
}