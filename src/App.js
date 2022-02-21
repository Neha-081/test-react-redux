import './App.css';
import { Todos } from './components/Todo';
import { Route,Routes } from 'react-router-dom';
import TodoList from './components/TodoList';
import Navbar from './components/Navbar';


function App() {

return <div className='App'>
  <Navbar/>
  <Routes>
    <Route exact path={'/'} element={<Todos/>}></Route>
    {/* <Route exact path={'/products'} element={<ProductsList products={products} selectProduct={selectProduct} />}></Route> */}
    <Route exact path="/todos/:todosid" element={<TodoList/>}></Route>
  </Routes>
</div>
}

export default App;
