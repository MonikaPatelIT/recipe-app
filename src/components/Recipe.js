import React from 'react';
import {Link} from 'react-router-dom';
const API_KEY = '983e1f6038b33c4c960f5ead47996eab';
class Recipe extends React.Component{
    state = {
        activeRecipes: []
      }
        componentDidMount = async () =>{
            
            const recipeName  = this.props.location.state.recipe;
            const recipe_call = await fetch(`https://www.food2fork.com/api/search?key=${API_KEY}&q=${recipeName}`);
             const data = await recipe_call.json();
           this.setState({activeRecipes:data.recipes[0]});
    
         }

    render(){
        const recipe = this.state.activeRecipes;
        
        return (
        <div className="container">
        
            {this.state.activeRecipes.length !==0 &&
            <div className="active-recipe">
                <img className="active-recipe__img"  src={recipe.image_url} alt={recipe.title} />
                <h3 className="active-recipe__text"> {recipe.title}</h3>
                <h4 className="active-recipe__publisher">Publisher <span>{recipe.publisher}</span></h4>
                <p className="active-recipe__website">Website: 
                    <span>
                        <a href={recipe.publisher_url}>{recipe.publisher_url}</a></span></p>
                <button className="active-recipes__button">
                <Link to="/">Go Home</Link>
                </button>
            </div>
            } 
        </div>
            );
    }
}

export default Recipe;