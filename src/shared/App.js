import React, { Component } from 'react';
import { Route , Switch } from 'react-router-dom';
import { Home, About} from '../containers';

class App extends Component {
    render(){
        return(
            <div>
                <Route exact path="/" component={Home}></Route>
                <Switch>                    
                    <Route path="/about/:name" component={About}/>
                    <Route path ="/about" component={About}></Route>
                </Switch>
            </div>
        )
    }
}

export default App;