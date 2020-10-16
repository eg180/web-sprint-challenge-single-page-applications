import React from 'react';


export default function PizzaForm() {


    return (
        <>
        <div>
            <h2>Build Your Own Pizza</h2>

            <form>
            <div className="pizza-size-section">
                <p className="form-title-section">Select a size<br /><span>Required</span></p>
                <label className="sizes">
                    <select type="select" name="pizza-size">
                        <option value="">--Please select a size--</option>
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                        <option value="rediculous">Simma down na!</option>
                    </select>
                </label>
                <br />
            </div>
            
            <div className="sauces-section">
                <p className="form-title-section">Choice of Sauce<br /><span>Required</span></p>
                <label>
                    <input type="radio" name="sauce" value="red" 
                    />Red
                </label><br />

                <label className="sauces">
                    <input type="radio" name="sauce" value="garlicranch" 
                    />Garlic Ranch
                </label><br />
                <label>
                    <input type="radio" name="sauce" value="bbq" 
                    />BBQ
                </label><br />
                <label>
                    <input type="radio" name="sauce" value="spinachalfredo" 
                    />Spinach Alfredo
                </label>

            <div className="toppings-section">
                <p className="form-title-section">Add Toppings<br /><span>Choose up to 10</span></p>
                <div className="toppings-left">
                    <label>
                            <input type="checkbox" name="toppings" value="pepperoni" />Pepperoni
                        </label>
                        <label>
                            <input type="checkbox" name="toppings" value="dicedtomatoes" />Diced Tomato
                        </label><br />
                        <label>
                            <input type="checkbox" name="toppings" value="sausage" />Sausage
                        </label>
                        <label>
                            <input type="checkbox" name="toppings" value="blackolives" />Black Olives
                        </label><br />
                        <label>
                            <input type="checkbox" name="toppings" value="canadianbacon" />Canadian Bacon
                        </label>
                        <label>
                            <input type="checkbox" name="toppings" value="roastedgarlic" />Roasted Garlic
                        </label><br />
                        <label>
                            <input type="checkbox" name="toppings" value="spicyitaliansausage" />Spicy Italilan Sausage
                        </label>
                </div>

                <div className="toppings-right">
                    <label>
                            <input type="checkbox" name="toppings" value="artichokehearts" />Artichole Hearts
                        </label><br />
                        <label>
                            <input type="checkbox" name="toppings" value="grilledchicken" />Grilled Chicken
                        </label>
                        <label>
                            <input type="checkbox" name="toppings" value="threecheese" />Three Cheese
                        </label><br />
                        <label>
                            <input type="checkbox" name="toppings" value="onions" />Onions
                        </label>
                        <label>
                            <input type="checkbox" name="toppings" value="pineapple" />Pineapple
                        </label><br />
                        <label>
                            <input type="checkbox" name="toppings" value="greenpepper" />Green Pepper
                        </label>
                        <label>
                            <input type="checkbox" name="toppings" value="Extra Cheese" />Extra Cheese
                        </label><br />
                </div>

                <div className="special-instructions">
                    <p className="form-title-section">Special Instructions</p>
                    <input name="specialinstructions" placeholder="Special Delivery Instructions" />
                </div>

                <div className="quantity-section">
                    
                </div>


                    
                    
                

                
            </div>

            </div>
            
            </form>
        </div>


        </>
    )
}