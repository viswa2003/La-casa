

import React from 'react';
import './menu.css'; 

const MenuPage = () => {
  const recipes = [
    {
      name: 'Bruschetta',
      price: '$8.99',
      description: 'Grilled bread topped with fresh tomatoes, garlic, and basil.',
      image: 'bruschetta.jpg',
    },
    {
      name: 'Chicken Wings',
      price: '$10.99',
      description: 'Crispy chicken wings served with your choice of sauce.',
      image: 'chicken_wings.jpg',
    },
    {
      name: 'Grilled Salmon',
      price: '$18.99',
      description: 'Fresh salmon fillet grilled to perfection, served with seasonal vegetables.',
      image: 'grilled_salmon.jpg',
    },
    {
      name: 'Filet Mignon',
      price: '$26.99',
      description: 'Tender filet mignon cooked to your preference, accompanied by mashed potatoes.',
      image: 'filet_mignon.jpg',
    },
  ];

  return (
    <div className="menu-page">
      <h1>Restaurant Menu</h1>

      <div className="menu-category">
        <h2>Appetizers</h2>
        <div className="menu-items">
          {recipes.slice(0, 2).map((recipe, index) => (
            <div className="recipe-card" key={index}>
              <img src={recipe.image} alt={recipe.name} className="recipe-image" />
              <div className="recipe-details">
                <h3 className="recipe-name">{recipe.name}</h3>
                <span className="recipe-price">{recipe.price}</span>
                <p className="recipe-description">{recipe.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="menu-category">
        <h2>Main Courses</h2>
        <div className="menu-items">
          {recipes.slice(2, 4).map((recipe, index) => (
            <div className="recipe-card" key={index}>
              <img src={recipe.image} alt={recipe.name} className="recipe-image" />
              <div className="recipe-details">
                <h3 className="recipe-name">{recipe.name}</h3>
                <span className="recipe-price">{recipe.price}</span>
                <p className="recipe-description">{recipe.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
