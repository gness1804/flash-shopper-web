import React, {Component} from 'react';
const ReactDOM = require('react-dom');

class Datalist extends Component {

  render() {
    return (
      <div>
        <datalist id="groceries">
            <option value="apples"></option>
     				<option value="bagels"></option>
            <option value="black beans"></option>
     				<option value="body wash"></option>
     				<option value="bread"></option>
     				<option value="chicken"></option>
            <option value="conditioner"></option>
            <option value="deodorant"></option>
            <option value="diced tomatoes"></option>
     				<option value="egg rolls"></option>
     				<option value="frozen dinners"></option>
     				<option value="frozen lunches"></option>
            <option value="frozen onions"></option>
            <option value="green onions"></option>
     				<option value="green pepper"></option>
     				<option value="ground beef"></option>
            <option value="ice cream"></option>
     				<option value="lunchmeat"></option>
     				<option value="magnums"></option>
            <option value="mouthwash"></option>
     				<option value="olives"></option>
     				<option value="pasta"></option>
     				<option value="pasta sauce"></option>
     				<option value="paper towels"></option>
     				<option value="peanuts"></option>
            <option value="red beans"></option>
     				<option value="rice"></option>
     				<option value="salsa"></option>
            <option value="sesame oil"></option>
            <option value="shampoo"></option>
     				<option value="soda"></option>
     				<option value="soup"></option>
            <option value="soy sauce"></option>
            <option value="stewed tomatoes"></option>
     				<option value="taco seasoning"></option>
            <option value="tomato paste"></option>
            <option value="tooth floss"></option>
            <option value="toothpaste"></option>
     				<option value="tortillas"></option>
            <option value="white beans"></option>
          </datalist>
      </div>
    );
  }

}

export default Datalist;
