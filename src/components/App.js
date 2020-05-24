import React from 'react';
import { connect } from 'react-redux';
import { unselectItem } from './../actions';
import ItemControl from './ItemControl';
import ItemDetail from './ItemDetail';
import FormControl from './FormControl';
import Footer from './Footer';
import './App.css';

function App(props) {
  return (
    <div className="App scroll">
      <div className="Header">
        <h1>AunTea's Organics</h1></div>
      <div className="ui container grid scroll">
        <div className="ui row scroll">
          <div className="column eight wide scroll" id="scroll-container">
            <ItemControl />
          </div>
          <div className="column eight wide">
            <ItemDetail item={props.selectedItem}
              handleClick={() => props.unselectItem()}/>
            <FormControl />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

const mapStateToProps = (state) => {
  return { 
    selectedItem: state.handleClick.selectedItem
  };
}

export default connect(mapStateToProps, { unselectItem })(App);