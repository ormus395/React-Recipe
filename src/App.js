import React, { Component } from 'react';
import './App.css';

import Navbar from './components/navbar.component'
import RecipeCard from './components/recipeCard.component'


class App extends Component {
  static defaultProps = {
    recipes: [
      {
        title: 'Steak and Eggs',
        ingredients: ['Steak', 'Eggs'],
        instructions: 'Cook eggs, and steak',
        img:
        'http://www.egglandsbest.com/wp-content/uploads/2016/09/steak-and-eggs-hash.jpg'
      },
      {
        title: 'Chicken Alfredo',
        ingredients: ['Chicken', 'Alfredo Sauce'],
        instructions: 'Cook chicken, mix with newdle and sauce',
        img: 'http://www.gonnawantseconds.com/wp-content/uploads/2017/04/Chicken-Alfredo-4-650-640x640.jpg'
      },
      {
        title: 'Al Pastor Tacos',
        ingredients: ['Al Pastor', 'Love'],
        instructions: 'Cook Pastor, Love it',
        img: 'http://www.seriouseats.com/images/2013/04/20130427-tacos-al-pastor-new-01.jpg'
      }
    ]
  }
  render() {
    return (<div>
        <Navbar />
      <div className="container">
        {this.props.recipes.map((r, index) => {
          return <RecipeCard key={index} title={r.title}
                    ingredients={r.ingredients}
                    img={r.img} instructions={r.instructions} 
                  />
        })}
      </div>
    </div>
    );
  }
}

export default App;
