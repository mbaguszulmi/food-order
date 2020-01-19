import React, { Component } from 'react';
import { Textfield, Button } from "react-mdl";
import { connect } from 'react-redux';
import { addCheckoutFood } from "../actions/checkoutActions";

const mapStateToProps = state => ({
    ...state
})

const mapDispatchToProps = dispatch => ({
    addCheckoutFood: (checkoutFoodData) => dispatch(addCheckoutFood(checkoutFoodData))
})

class Checkout extends Component {
    componentDidMount() {
        document.title = "Check Out";

        document.querySelector("#textfield-FoodName").addEventListener("input", event => {
            let foodNameInput = event.target;
            foodNameInput.value = foodNameInput.value.toUpperCase();
        });

        document.querySelector("#add-btn").addEventListener("click", () => {
            let foodName = document.querySelector("#textfield-FoodName").value;
            let price = document.querySelector("#textfield-Price").value;
            
            if (foodName.trim() !== "" && price.trim()!== "" && !isNaN(price.trim())) {
                this.props.addFood({
                    foodId: foodName,
                    foodData: {
                        foodName: foodName,
                        price: price
                    }
                });

                document.querySelector("#textfield-FoodName").value = '';
                document.querySelector("#textfield-Price").value = '';

                this.setState({
                    isAddFoodSucceed: true
                });
            }
        });
    }

    render() {
        return(
            <div>
            <h1>Check Out</h1>

                <div className="add-food-form">
                    <Textfield
                        onChange={() => {}}
                        label="Food Name"
                        floatingLabel
                        style={{width: '200px', marginRight: 10}}
                        list="food-list"
                    />

                    <datalist id="food-list">
                        {Object.keys(this.props.foods).map((key) => <option key={key} value={this.props.foods[key].foodName} />)}
                    </datalist>

                    <Textfield
                        onChange={() => {}}
                        label="Quantity"
                        floatingLabel
                        style={{width: '200px', marginRight: 10}}
                        pattern="-?[0-9]*(\.[0-9]+)?"
                        error="Quantity be in number"
                    />

                    <Button id="add-food-btn" raised accent ripple>Add</Button>
                </div>

                <div className="apply-promo-form">
                    <Textfield
                        onChange={() => {}}
                        label="Promo Code"
                        floatingLabel
                        style={{width: '200px', marginRight: 10}}
                    />

                    <Button id="apply-promo-btn" raised accent ripple>Apply</Button>
                </div>

                <div className="delivery-fee-form">
                    <Textfield
                        onChange={() => {}}
                        label="Delivery Fee"
                        floatingLabel
                        style={{width: '200px', marginRight: 10}}
                        pattern="-?[0-9]*(\.[0-9]+)?"
                        error="Delivery Fee must be in number"
                    />
                </div>

                <div className="table-container">
                    {/* <DataTable
                        id="checkout-table"
                        shadow={0}
                        rows={[]}
                    >
                        <TableHeader name="foodName" tooltip="Food Name">Food Name</TableHeader>
                        <TableHeader numeric name="price" tooltip="Price in Rp">Price (Rp)</TableHeader>
                        <TableHeader numeric name="quantity" tooltip="Quantity">Quantity</TableHeader>
                        <TableHeader numeric name="subTotal" tooltip="Sub Total in Rp">Sub Total (Rp)</TableHeader>
                    </DataTable> */}

                    <table class="mdl-data-table mdl-js-data-table">
                        <thead>
                            <tr>
                                <th class="mdl-data-table__cell--non-numeric">Food Name</th>
                                <th>Price (Rp)</th>
                                <th>Quantity</th>
                                <th>Sub Total (Rp)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="mdl-data-table__cell--non-numeric">Acrylic (Transparent)</td>
                                <td>250</td>
                                <td>1</td>
                                <td>250</td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <th colspan="3">Total Price</th>
                                <td id="total-price-value">0</td>
                            </tr>

                            <tr>
                                <th colspan="3">Discount <span id="promo-value"></span></th>
                                <td id="discount-value">0</td>
                            </tr>

                            <tr>
                                <th colspan="3">Delivery Fee</th>
                                <td id="delivery-fee-value">0</td>
                            </tr>

                            <tr>
                                <th colspan="3">Total</th>
                                <td id="total-value">0</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);