import React, { Component } from 'react';
import RecipeList from './recipeList.component';

class RecipeCard extends Component {
  render() {
    return (<div className="recipe-card">
      <div>
        <img src={this.props.img} />
      </div>
      <div className="recipe-card-content">
          <h3>{this.props.title}</h3>
          <RecipeList ingredients={this.props.ingredients} />
          <h4>Instructions</h4>
          <p>{this.props.instructions}</p>
      </div>
    </div>)
  }
}

export default RecipeCard;