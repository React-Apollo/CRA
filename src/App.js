import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

import { graphql} from 'react-apollo';
import gql from 'graphql-tag';

const getOneNode = gql`
  query ($id: String!){
    OneNode(id:$id) {
       id,
       tab,
       content,
       
    }
  }
`;
class App extends Component {
  
  render() {
    console.log(this.props.data);
    if(!this.props.data.loading){
     var content=this.props.data.OneNode.content;
     console.log(typeof(content))
    }else{
      var content = "";
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
        <div>{ReactHtmlParser(content)}</div>;
        </div>

      </div>
    );
  }
}

export default graphql(getOneNode, {options: () => {
  
  return ({
    variables: {
      id: '5433d5e4e737cbe96dcef312',
     
    }
  });
}})(App)
