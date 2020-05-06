import React,{Component} from 'react';

import './App.css';
import { CardList } from './components/card-list/card-list.component';
import {Search} from './components/search/search-component';

class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters: [],
      searchString: ''
    }

  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))
    .catch(reject => console.log("ERROR GENERATED"))
  }

  handleChange = (e) => {
    this.setState({searchString: e.target.value}, () => console.log(this.state));
    console.log(this)
  }

  render() {
    const {monsters, searchString} = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchString.toLowerCase())
      );
    return (
      <div className="App">
        <header className="App-header">
          <h1>Monster Rolodex</h1>
          <Search placeholder="Search Monster"
            handleChange = {this.handleChange}
          />
          <CardList monsters = {filteredMonsters}> 
          </CardList>
        </header>
      </div>
    );
  }

}

export default App;
