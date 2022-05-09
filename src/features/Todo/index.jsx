import React from 'react';
// import {useClock} from '../../components/Clock';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import NotFound from './../../components/NotFound/index';
import DetailPage from './pages/DetailPage/index';
import ListPage from './pages/ListPage/index';
TodoFeatures.propTypes = {

};

function TodoFeatures(props) {
  const match = useRouteMatch();


  // const {timeString} = useClock();
  return (
    <div>
      <h3>Todo share UI</h3>
      <Switch>
        <Route path={match.path} component={ListPage} exact/>
        <Route exact path={`${match.path}/:todoId`} component={DetailPage} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default TodoFeatures;