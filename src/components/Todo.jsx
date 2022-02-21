import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../App.css";
import {
  addTodoError,
  addTodoLoading,
  addTodoSuccess,
  getTodoLoading,
  getTodoSuccess,
} from "../store/actions";
import axios from "axios";


export const Todos = () => {
  const { loading, data, error } = useSelector((store) => store.todos);
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const [inputData,setInputData]=useState('')
  const [toggleSubmit, setToggleSubmit] = useState(true);
  const [currentTodo, setCurrentTodo] = useState({});

  useEffect(() => {
    getTodos();
  }, []);



  //add todo
  const getTodos = () => {
    dispatch(getTodoLoading());
    axios.get("http://localhost:3001/todos").then(({ data }) => {
      dispatch(getTodoSuccess(data));
    });
  };
  //delete todo
  const handleClick = (id) => {
    fetch(`http://localhost:3001/todos/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        getTodos();
      })
      .catch((err) => console.log(err, "delete ni hua"));
  };

  //update todo
  const handleStatus = (id, status) => {
    fetch(`http://localhost:3001/todos/${id}`, {
      method: "PATCH",
      body: JSON.stringify({
        status: !status,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(getTodos)
      .catch((err) => console.log(err, "patch ni hua"));
  };

  //edit todo
  const handleEdit=(id)=> {
    let newEditItem=data.find((elem)=>{
    return elem.id===id
    });
    console.log(newEditItem.title);
    setToggleSubmit(false)
    setText(newEditItem.title)


  }

  // const editTodoSubmitHandler=(event)=>{
  //   event.preventDefault();

  // }

  // if(toggleSubmit){
  //   <li>
  //     <form onSubmit={editTodoSubmitHandler()}>
  //       <input type="text" defaultValue={data.title}/>
  //       <button type="submit">Save</button>
  //       <button onClick={()=>handleEdit()}>Cancel</button>
  //     </form>
  //   </li>
  // }


  return loading ? (
    "...Loading"
  ) : (
    <div className="form-group">
      <h1 className="fa fa-plus">TODOS</h1>
      <input
        className="form-control inputBody inputTitle"
        id="exampleInputEmail1"
        text="text"
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter Todo"
      />
      {
        toggleSubmit ? 
        (<button
        className="btn btn-warning"
        onClick={() => {
          dispatch(addTodoLoading());
          axios
            .post("http://localhost:3001/todos", {
              id: Date.now(),
              title: text,
              status: false,
            })
            .then((data) => {
              dispatch(addTodoSuccess());
              getTodos();
            })
            .catch((error) => {
              dispatch(addTodoError(error));
            });
        }}
      >
        Add Todo
      </button>) 
      :
      (<button
        className="btn btn-warning"
        onClick={() => {
          dispatch(addTodoLoading());
          axios
            .post("http://localhost:3001/todos", {
              id: Date.now(),
              title: text,
              status: false,
            })
            .then((data) => {
              dispatch(addTodoSuccess());
              getTodos();
            })
            .catch((error) => {
              dispatch(addTodoError(error));
            });
        }}
      >
        Edit
      </button>) 
      }
  
    
      <div id="listFlex">
        {data.map((e) => (
        <div className="bullets">
          <li key={e.id} className="TodoName" >
           
                       <Link className="title"  to={`/todos/${e.id}`}>{e.title}</Link>
            <button
              className="btn btn-danger delete"
              onClick={() => handleClick(e.id)}
            >
              Delete
            </button>
            
            {e.status ? (
              <button
                className="btn btn-success toggleBtn"
                onClick={() => handleStatus(e.id, e.status)}
              >
                Completed
              </button>
            ) : (
              <button
                className="btn btn-primary toggleBtn"
                onClick={() => handleStatus(e.id, e.status)}
              >
                Pending
              </button>
              
            )}
            <button    className="btn btn-warning" onClick={()=>handleEdit(e.id)}>Edit</button>
          </li>
      </div>
        ))}
      </div>

      
      </div>

  );
};
