import React, { Component } from 'react';

class RecipeList extends Component { 
  render() {
    return (<ul>
              {this.props.ingredients.map((ing, index) => {
                return <li key={index}>{ing}</li>
              })}
            </ul>

    )
  }
}

export default RecipeList;