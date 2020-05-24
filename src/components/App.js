import React from 'react';
import { connect } from 'react-redux';
import ItemControl from './ItemControl';
import ItemDetail from './ItemDetail';
import FormControl from './FormControl';
import Footer from './Footer';
import './App.css';

function App(props) {
  return (
    <div className="App">
      <div className="Header">
        <h1>AunTea's Organics</h1></div>
      <div className="ui container grid">
        <div className="ui row">
          <div className="column eight wide">
            <ItemControl />
          </div>
          <div className="column eight wide">
            <ItemDetail item={props.selectedItem}/>
            <FormControl />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

const mapStateToProps = (state) => {
  return { selectedItem: state.handleClick.selectedItem };
}

export default connect(mapStateToProps)(App);