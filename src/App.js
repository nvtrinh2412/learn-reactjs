
import productApi from 'api/productApi';
import NotFound from 'components/NotFound';
import React, { useEffect } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import './App.css';
import AlbumFeature from './features/Album';
import TodoFeature from './features/Todo';
import TodoForm from './features/Todo/components/TodoForm/index';



function App() {
  useEffect(() => {
    const fecthProduct = async () => {
      const productList = await productApi.getAll();
      console.log(productList);
    };
    fecthProduct();
  }, []);

return (
  <div className="app">
    <p><Link to="/todos">Todos</Link></p>
    <p><Link to="/albums">Album</Link></p>

    <Switch>
      {/* <Redirect  from="/home" to="/" />
        <Redirect  from="/post-list" to="/posts" /> */}
      <Route path="/todos" component={TodoFeature} />
      <Route path="/albums" component={AlbumFeature} />
      <Route path="/" component={AlbumFeature}/>
      <Route component={NotFound} />
    </Switch>

  </div >
);
}

export default App;
