import React, {Component} from 'react';

const ReactDOM = require('react-dom');

class Category extends Component {

  assignAisle() {
    const category = document.getElementById('category').value;
    this.props.assignAisle(category);
  }

  render() {
    return (
      <div>
        <select id="category" defaultValue="Please choose a category." onChange={() => { this.assignAisle() }}>
               <option>Please choose a category.</option>
               <option>Bottled Water</option>
               <option>Breads/PBJ/Honey</option>
               <option>Canned Beans/Tomatoes/Soups</option>
               <option>Canned Fish/Ethnic Foods/Pasta+Pasta Sauce/Rice</option>
               <option>Chips/Nuts</option>
               <option>Cooking Wines/Condiments/Olives</option>
               <option>Dish+Laundry Detergent</option>
               <option>Frozen Items</option>
               <option>Household Goods</option>
               <option>Medicines (OTC)</option>
               <option>Office Supplies</option>

               <option>Personal Care Items</option>
               <option>Produce</option>
               <option>Soda</option>
               <option>Spices and Baking Items</option>
         </select>
      </div>
    );
  }

}


export default Category;
