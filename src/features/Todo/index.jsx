import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import TodoList from './components/TodoList';
// import {useClock} from '../../components/Clock';
TodoFeatures.propTypes = {

};

function TodoFeatures(props) {
  const initTodoList = [
    {
      id: 1,
      title: "Eat",
      status: 'new'
    },
    {
      id: 2,
      title: "Sleep",
      status: 'completed'

    },
    {
      id: 3,
      title: "Code",
      status: 'new'

    },
  ]
  const [todoList,setTodoList] = useState(initTodoList);
  const [filterStatus, setFilterStatus] = useState('all');

  const handleShowAllClick =() =>{
    setFilterStatus('all');
  }
  const handleShowCompletedClick = () =>{
    setFilterStatus('completed');
  }
  const handleShowNewClick =() =>{
    setFilterStatus('new');
  }

  const renderedTodoList = todoList.filter(todo => filterStatus === 'all' || filterStatus === todo.status);
  console.log(renderedTodoList);
  const handleTodoClick = (todo, idx) => {
    console.log({todo,idx});
    const newTodoList = [...todoList];
    newTodoList[idx].status = todo.status === 'new' ? 'completed' : 'new';
    setTodoList(newTodoList);
  }

  // const {timeString} = useClock();
  return (
    <div>
      <h3>Todo List </h3>
     <TodoList 
     todoList={renderedTodoList} 
     onTodoClick={handleTodoClick} 
     />
     <button onClick = {handleShowAllClick}>Show all</button>
     <button onClick = {handleShowCompletedClick} >Show completed</button>
     <button onClick = {handleShowNewClick}>Show new</button>

    </div>
  );
}

export default TodoFeatures;