import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Button from 'react-bootstrap/Button';
import {BrowserRouter,Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar'
import Posts from "./components/Posts"
import IndPost from "./components/Indpost"
import NewPost from './components/NewPost'
import Data from './components/data';
import Login from './components/login';
import NewPosts from './components/trail'



const App=()=>{
  return(
<React.Fragment>

<BrowserRouter>
{/* <Navbar/> */}
<Switch>
<Route exact path="/" component={Posts}/>
<Route path="/home" component={Posts}/>
<Route exact path="/posts" component={Posts}/>
<Route  path="/:id/:Title" component={IndPost}/>
<Route exact path="/new" component={NewPost}/>
<Route exact path="/data" component={Data}/>
<Route exact path="/login" component={Login}/>
<Route exact path="/newposts" component={NewPosts}/>






</Switch>
</BrowserRouter>
</React.Fragment>
  )
}
export default App;