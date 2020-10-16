import React from 'react';


export default function PizzaForm(props) {

    const {change} = props;

    const handleChange = (evt) => {
        const {name, value, type, checked} = evt.target;
        const valueToUse = type === "checkbox" ? checked : value;
        change(name, valueToUse);
    }


    return (
        <>
        <div>
            <h2>Build Your Own Pizza</h2>

            <form>
            <div className="pizza-size-section">
                <p className="form-title-section">Select a size<br /><span>Required</span></p>
                <label className="sizes">
                    <select type="select" name="size" onChange={handleChange}>
                        <option value="">--Please select a size--</option>
                        <option value="small" onChange={handleChange}>Small</option>
                        <option value="medium" onChange={handleChange}>Medium</option>
                        <option value="large" onChange={handleChange}>Large</option>
                        <option value="rediculous" onChange={handleChange}>Simma down na!</option>
                    </select>
                </label>
                <br />
            </div>
            
            <div className="sauces-section">
                <p className="form-title-section">Choice of Sauce<br /><span>Required</span></p>
                <label>
                    <input type="radio" name="sauce" onChange={handleChange} value="red" 
                    />Red
                </label><br />

                <label className="sauces">
                    <input type="radio" name="sauce" onChange={handleChange} value="garlicranch" 
                    />Garlic Ranch
                </label><br />
                <label>
                    <input type="radio" name="sauce" onChange={handleChange} value="bbq" 
                    />BBQ
                </label><br />
                <label>
                    <input type="radio" name="sauce" onChange={handleChange} value="spinachalfredo" 
                    />Spinach Alfredo
                </label>

            <div className="toppings-section">
                <p className="form-title-section">Add Toppings<br /><span>Choose up to 10</span></p>
                <div className="toppings-left">
                    <label>
                            <input type="checkbox" name="toppings" onChange={handleChange} value="pepperoni" />Pepperoni
                        </label>
                        <label>
                            <input type="checkbox" name="toppings" onChange={handleChange} value="dicedtomatoes" />Diced Tomato
                        </label><br />
                        <label>
                            <input type="checkbox" name="toppings" onChange={handleChange} value="sausage" />Sausage
                        </label>
                        <label>
                            <input type="checkbox" name="toppings" onChange={handleChange} value="blackolives" />Black Olives
                        </label><br />
                        <label>
                            <input type="checkbox" name="toppings" onChange={handleChange} value="canadianbacon" />Canadian Bacon
                        </label>
                        <label>
                            <input type="checkbox" name="toppings" onChange={handleChange} value="roastedgarlic" />Roasted Garlic
                        </label><br />
                        <label>
                            <input type="checkbox" name="toppings" onChange={handleChange} value="spicyitaliansausage" />Spicy Italilan Sausage
                        </label>
                </div>

                <div className="toppings-right">
                    <label>
                            <input type="checkbox" name="toppings" onChange={handleChange} value="artichokehearts" />Artichole Hearts
                        </label><br />
                        <label>
                            <input type="checkbox" name="toppings" onChange={handleChange} value="grilledchicken" />Grilled Chicken
                        </label>
                        <label>
                            <input type="checkbox" name="toppings" onChange={handleChange} value="threecheese" />Three Cheese
                        </label><br />
                        <label>
                            <input type="checkbox" name="toppings" onChange={handleChange} value="onions" />Onions
                        </label>
                        <label>
                            <input type="checkbox" name="toppings" onChange={handleChange} value="pineapple" />Pineapple
                        </label><br />
                        <label>
                            <input type="checkbox" name="toppings" onChange={handleChange} value="greenpepper" />Green Pepper
                        </label>
                        <label>
                            <input type="checkbox" name="toppings" onChange={handleChange} value="Extra Cheese" />Extra Cheese
                        </label><br />
                </div>

                <div className="special-instructions">
                    <p className="form-title-section">Special Instructions</p>
                    <input name="specialinstructions" onChange={handleChange}
                    placeholder="Special Delivery Instructions" />
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