import { useState } from "react";
import TodoTable from "./TodoTable";

function TodoList() {
  const [todo, setTodo] = useState({ desc: "", date: "" });
  const [todolist, setTodolist] = useState([]);

  const inputChanged = (e) => {
    setTodo({ ...todo, [e.target.name]: e.target.value });
  };

  const addTodo = () => {
    if (todo.desc == "" || todo.date == "") {
      alert("Please input a task!");
    } else {
      setTodolist([...todolist, todo]);
      setTodo({ desc: "", date: "" });
    }
  };

  const deleteTodo = (index) => {
    setTodolist(todolist.filter((todo, i) => i !== index));
  };

  return (
    <div>
      <label>Description: </label>
      <input
        name="desc"
        placeholder="Description"
        type="text"
        value={todo.desc}
        onChange={inputChanged}
      />
      <label>Date: </label>
      <input
        name="date"
        type="text"
        placeholder="Date"
        value={todo.date}
        onChange={inputChanged}
      />
      <button onClick={addTodo}>Add</button>
      <TodoTable param={todolist} deleteFunction={deleteTodo} />
    </div>
  );
}

export default TodoList;
