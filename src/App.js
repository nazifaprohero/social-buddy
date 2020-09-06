import React from 'react';
import './App.css';
import Display from './component/Display/Display';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import NotFound from './component/NotFound/NotFound';
import PostReview from './component/PostReview/PostReview';
import Comment from './component/Comment/Comment';





function App() {
 

  return (
    <div>        
    <Router>
    <Switch>
        <Route path="/display">
          <Display></Display>        
        </Route>
        <Route exact path="/">
          <Display></Display>           
        </Route>
        <Route path="/review/:Id">
          <PostReview></PostReview>    
        </Route>
        <Route path="/comment/:postId">
          <PostReview></PostReview>    
        </Route>
        <Route path="/photos/:Id">
            <Comment></Comment>
        </Route>
        <Route path="*">
          <NotFound></NotFound>           
        </Route>
    </Switch>
    </Router>

  
    </div>
  );
}

export default App;
