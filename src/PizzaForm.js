import React from 'react';


export default function PizzaForm() {


    return (
        <>
        <div>
            <h2>Build Your Own Pizza</h2>

            <form>
            <p class="form-title-section">Select a size</p>
            <label class="sizes">
                <select type="select" name="pizza-size">
                    <option value="">--Please select a size--</option>
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                    <option value="rediculous">Simma down na!</option>
                </select>
            </label>
            <br />
            <div class="sauces">
                <p class="form-title-section">Choice of Sauce</p>
                <label>Red
                    <input type="radio" name="sauce" value="red" 
                    />
                </label><br />

                <label class="sauces">Garlic Ranch
                    <input type="radio" name="sauce" value="garlicranch" 
                    />
                </label><br />
                <label>BBQ
                    <input type="radio" name="sauce" value="bbq" 
                    />
                </label><br />
                <label>Spinach Alfredo
                    <input type="radio" name="sauce" value="spinachalfredo" 
                    />
                </label>

            </div>
            
            </form>
        </div>


        </>
    )
}