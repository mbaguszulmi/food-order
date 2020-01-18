import React, { Component } from 'react';
import { Textfield, Button, Snackbar } from "react-mdl";
import { connect } from 'react-redux';
import { addFood } from '../actions/addFood';
import { Redirect } from 'react-router-dom';

const mapStateToProps = state => ({
    ...state
})

const mapDispatchToProps = dispatch => ({
    addFood: (foodData) => dispatch(addFood(foodData))
})

class AddFood extends Component {
    state={ isAddFoodSucceed: false };

    componentDidMount() {
        document.title = "Add Food";

        document.querySelector("#add-btn").addEventListener("click", () => {
            let foodName = document.querySelector("#textfield-FoodName").value;
            let price = document.querySelector("#textfield-Price").value;
            
            if (foodName.trim() !== "" && price.trim()!== "" && !isNaN(price.trim())) {
                this.props.addFood({
                    foodName: foodName,
                    price: price
                });

                document.querySelector("#textfield-FoodName").value = '';
                document.querySelector("#textfield-Price").value = '';

                this.setState({
                    isAddFoodSucceed: true
                });
            }
        });
    }

    disableAddFoodSnackbar() {
        this.setState({
            isAddFoodSucceed: false
        });
    }

    viewFood() {
        window.location.hash = "#/"
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

                <Snackbar
                    active={this.state.isAddFoodSucceed}
                    onTimeout={() => this.disableAddFoodSnackbar()}
                    action="View Foods"
                    onClick={this.viewFood}>Add food succeeded</Snackbar>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddFood);