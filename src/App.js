import React, { Component } from 'react';
import Form from './components/Form';
import Recipes from './components/Recipes';

const API_KEY = '983e1f6038b33c4c960f5ead47996eab';

class App extends Component {

state = {
  recipes: []
}
  getRecipe = async (e) =>{
    const recipe =  e.target.elements.recipeName.value==="" ? "chicken" : e.target.elements.recipeName.value;
	console.log(recipe);
    e.preventDefault();
    
    const api_call = await fetch(`https://www.food2fork.com/api/search?key=${API_KEY}&q=${recipe}&page=2&count=5`);
const data = await api_call.json();
    this.setState({recipes:data.recipes});

  }
  
componentDidMount= () =>{
  const JSONData = localStorage.getItem("recipes");
  const recipes = JSON.parse(JSONData);
  this.setState({recipes});
  }
  componentDidUpdate =() =>{
    const recipes = JSON.stringify(this.state.recipes);
    localStorage.setItem("recipes", recipes);
  }
  render() {
    return (
      <div className="App">
       <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
        </header>
      <Form getRecipe={this.getRecipe}></Form>
      <Recipes recipes={this.state.recipes}></Recipes>
      </div>

    );
  }
}

export default App;
