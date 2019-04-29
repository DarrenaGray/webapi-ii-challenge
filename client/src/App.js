import React from 'react';
import axios from 'axios';
import Posts from './components/Posts';
import './App.css';

class App extends React.Component {
  state = {
    posts: []
  };

  componentDidMount() {
    axios
      .get('http://localhost:5000/api/posts')
      .then(res => {
        console.log(res.data);
        this.setState({
          posts: res.data
        });
      })
      .catch(err => {
        console.log(err)
      })
  }
  

  render() {
    return (
      <div className = "App" >
        <h1>Lord of the Rings: Quote Trivia</h1>
        <Posts posts={this.state.posts}/>
      </div>
    );
  }
}

export default App;