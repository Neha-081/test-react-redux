import './App.css';

import { Route,Routes } from 'react-router-dom';
import Main from './components/Main';
import SearchData from './components/SearchData';
import SerachItem from './components/SerachItem';



function App() {

return <div className='App'>

  <Routes>
    <Route exact path={'/'} element={<Main/>}></Route>
    {/* <Route exact path={'/searchData'} element={<Search/>}></Route> */}
     <Route path={'/searchData'}  element={<SearchData/>}></Route>
     <Route path={'/engine/:engineid'}  element={<SerachItem/>}></Route>

  </Routes>
</div>
}

export default App;
