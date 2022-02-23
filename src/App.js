import './App.css';
import axios from 'axios';
import {useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route,Routes } from 'react-router-dom';
import { getDataSuccess } from './store/actions';
import Main from './components/Main';
import SearchData from './components/SearchData';
import SerachItem from './components/SerachItem';

const App = () => {

  const dispatch=useDispatch()
  useEffect(()=>{
    
    const getDataEngine=()=>{
   axios.get("https://neha-json-server.herokuapp.com/engine").then(({data})=>{
       dispatch(getDataSuccess(data))
   })
}
  
getDataEngine()
},[dispatch])


return <div className='App'>

  <Routes>
    <Route exact path={'/'} element={<Main/>}></Route>
    {/* <Route exact path={'/searchData'} element={<Search/>}></Route> */}
     <Route path={'/searchData'}  element={<SearchData/>}></Route>
     <Route path={'/engine/:engineid'} element={<SerachItem/>}></Route>

  </Routes>
</div>
}

export default App;
