
import querystring from 'query-string';
import React, { useEffect, useState } from 'react';
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom';
import TodoList from '../../components/TodoList';
// import {useClock} from '../../components/Clock';
ListPage.propTypes = {};

function ListPage(props) {
  const initTodoList = [
    {
      id: 1,
      title: 'Eat',
      status: 'new',
    },
    {
      id: 2,
      title: 'Sleep',
      status: 'completed',
    },
    {
      id: 3,
      title: 'Code',
      status: 'new',
    },
  ];
  const [todoList, setTodoList] = useState(initTodoList);

  const location = useLocation();
  const history = useHistory();
  const match = useRouteMatch();

  useEffect(() => {
    const query = querystring.parse(location.search);
    setFilterStatus(query.status || 'all');
  }, [location.search]);

  const [filterStatus, setFilterStatus] = useState(() => {
    const params = querystring.parse(location.search);
    // console.log(params);

    return params.status || 'all';
  });

  const handleShowAllClick = () => {
    // setFilterStatus('all');
    const queryPram = { status: 'all' };
    history.push({
      pathLocation: match.path,
      search: querystring.stringify(queryPram),
    });
  };
  const handleShowCompletedClick = () => {
    // setFilterStatus('completed');
    const queryPram = { status: 'completed' };
    history.push({
      pathLocation: match.path,
      search: querystring.stringify(queryPram),
    });
  };
  const handleShowNewClick = () => {
    // setFilterStatus('new');
    const queryPram = { status: 'new' };
    history.push({
      pathLocation: match.path,
      search: querystring.stringify(queryPram),
    });
  };

  const renderedTodoList = todoList.filter((todo) => filterStatus === 'all' || filterStatus === todo.status);
  // console.log(renderedTodoList);
  const handleTodoClick = (todo, idx) => {
    // console.log({todo,idx});
    const newTodoList = [...todoList];
    newTodoList[idx].status = todo.status === 'new' ? 'completed' : 'new';
    setTodoList(newTodoList);
  };

  // const {timeString} = useClock();
  return (
    <div>
      <h3>Todo List </h3>
      <TodoList todoList={renderedTodoList} onTodoClick={handleTodoClick} />
      <button onClick={handleShowAllClick}>Show all</button>
      <button onClick={handleShowCompletedClick}>Show completed</button>
      <button onClick={handleShowNewClick}>Show new</button>
    </div>
  );
}

export default ListPage;
