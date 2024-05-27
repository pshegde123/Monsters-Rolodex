import { Component,React } from "react";
import SearchBox from "./components/search-box/search-box.component";
import CardList from "./components/card-list/card-list.component";
import './App.css'

class App extends Component{
  constructor() {
    super();
    this.state = {
      monsters:[],
      filteredMonsters:[],
      searchField:''
    };
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then((users) => this.setState(() => {return({monsters:users,filteredMonsters:users})}),()=>{
      console.log(this.state)
    })
    
  }
    
  handleChange = (e)=>{
    const {monsters} = this.state;
    const searchField = e.target.value.toLocaleLowerCase();                     
    this.setState(() => { return(searchField)})
    const searchResults = monsters.filter((character)=>character.name.toLowerCase().includes(searchField))
    this.setState(() =>{return ({filteredMonsters:searchResults})})
  }

  render(){           
    return (      
      <div className="App">
        <h1 className="app-title">Monsters Rolodex</h1>
        <SearchBox className="search-box" placeholder="search monster" onChangeHandler={this.handleChange}/>
        <CardList filteredMosters={this.state.filteredMonsters}/>
      </div>
    );  
  }
}

export default App;
