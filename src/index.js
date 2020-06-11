import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import reducers from "./reducers/reducers.js";
import PokemonContainer from './container/pokemon-container.js';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

let store = createStore(reducers, applyMiddleware(thunk))

class App extends React.Component{
    render(){
        return(
           <PokemonContainer></PokemonContainer>
        )
    }
}

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

