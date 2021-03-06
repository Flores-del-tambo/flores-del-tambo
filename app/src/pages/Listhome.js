import React, {useState, useEffect} from "react";
import Form from "../components/Form1"
import TodosList from "../components/TodoList";
import '../components/listhome.css';

const Listhome = () => {

  const initialState = JSON.parse(localStorage.getItem("todos")) || [];
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState(initialState);
  const [editTodo, setEditTodo] = useState(null);

  useEffect(() =>{
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="container">
      <div className="app-wrapper">
      
        <div>
          <Form 
          input={input}
          setInput={setInput}
          todos={todos}
          setTodos={setTodos}
          editTodo={editTodo}
          setEditTodo={setEditTodo}
          />
        </div>
        <div>
          <TodosList 
          todos={todos} 
          setTodos={setTodos} 
          setEditTodo={setEditTodo}/>
        </div>
      </div>

      <div className="app-wrapper">
      
      <div>
        <Form 
        input={input}
        setInput={setInput}
        todos={todos}
        setTodos={setTodos}
        editTodo={editTodo}
        setEditTodo={setEditTodo}
        />
      </div>
      <div>
        <TodosList 
        todos={todos} 
        setTodos={setTodos} 
        setEditTodo={setEditTodo}/>
      </div>
    </div>
    </div>
    );
};

export default Listhome;