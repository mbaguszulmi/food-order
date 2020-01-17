import React, { Component } from 'react';
import { Textfield, Button } from "react-mdl";

class AddFood extends Component {
    componentDidMount() {
        document.title = "Add Food";

        document.querySelector("#add-btn").addEventListener("click", event => {
            let foodName = document.querySelector("#textfield-FoodName").value;
            let price = document.querySelector("#textfield-Price").value;
            
            if (foodName.trim() !== "" && price.trim()!== "" && !isNaN(price.trim())) {
                console.log("OK");
            }
        });
    }

    render() {
        return(
            <div>
                <h1>Add Food</h1>

                <div className="add-food-container">
                    <Textfield
                        onChange={() => {}}
                        label="Food Name"
                        floatingLabel
                        style={{width: '200px', display: 'block'}}
                    />

                    <Textfield
                        onChange={() => {}}
                        label="Price"
                        floatingLabel
                        pattern="-?[0-9]*(\.[0-9]+)?"
                        error="Price must be in number"
                        style={{width: '200px', display: 'block'}}
                    />

                    <Button id="add-btn" raised accent ripple>Add</Button>
                </div>
            </div>
        );
    }
}

export default AddFood;