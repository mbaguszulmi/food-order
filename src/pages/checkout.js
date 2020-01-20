import React, { Component } from 'react';
import { Textfield, Button, Snackbar } from "react-mdl";
import { connect } from 'react-redux';
import { addCheckoutFood, addCheckoutPromo } from "../actions/checkoutActions";

const mapStateToProps = state => ({
    ...state
})

const mapDispatchToProps = dispatch => ({
    addCheckoutFood: (checkoutFoodData) => dispatch(addCheckoutFood(checkoutFoodData)),
    addCheckoutPromo: (checkoutPromoData) => dispatch(addCheckoutPromo(checkoutPromoData))
})

class Checkout extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showCheckOutSnackbar: false,
            snackbarMessage: null
        }
    }

    componentDidMount() {
        document.title = "Check Out";

        document.querySelector("#textfield-FoodName").addEventListener("input", event => {
            event.target.value = event.target.value.toUpperCase();
        });

        document.querySelector("#textfield-PromoCode").addEventListener("input", event => {
            event.target.value = event.target.value.toUpperCase();
        });

        document.querySelector("#add-food-btn").addEventListener("click", () => {
            let foodName = document.querySelector("#textfield-FoodName").value;
            let quantity = document.querySelector("#textfield-Quantity").value;
            
            if (foodName.trim() !== "" && quantity.trim()!== "" && !isNaN(quantity.trim())) {
                if (this.props.foods.hasOwnProperty(foodName)) {
                    this.props.addCheckoutFood({
                        foodName: foodName,
                        quantity: quantity
                    });

                    document.querySelector("#textfield-FoodName").value = '';
                    document.querySelector("#textfield-Quantity").value = '';
    
                    this.setState({
                        showCheckOutSnackbar: true,
                        snackbarMessage: `Food ${foodName} added to checkout list`
                    });
                }
                else {
                    this.setState({
                        showCheckOutSnackbar: true,
                        snackbarMessage: `Food ${foodName} not found`
                    });
                }
            }
        });

        document.querySelector("#apply-promo-btn").addEventListener("click", () => {
            let promoCode = document.querySelector("#textfield-PromoCode").value;
            
            if (promoCode.trim() !== "") {
                if (this.props.promo.hasOwnProperty(promoCode)) {
                    this.props.addCheckoutPromo(promoCode);

                    document.querySelector("#textfield-PromoCode").value = '';
    
                    this.setState({
                        showCheckOutSnackbar: true,
                        snackbarMessage: `Promo Code "${promoCode}" applied`
                    });
                }
                else {
                    this.setState({
                        showCheckOutSnackbar: true,
                        snackbarMessage: `Promo Code "${promoCode}" not found`
                    });
                }
            }
        });
    }

    disableAddFoodSnackbar() {
        this.setState({
            showCheckOutSnackbar: false
        });
    }

    getTotalPrice(foodList) {
        return Object.keys(foodList).map(value => this.props.foods[value].price * foodList[value])
        .reduce((a, b) => a + b, 0)
    }

    getDiscount(foodList) {
        if (this.props.checkout.promoCode) {
            let discount = Object.keys(foodList)
            .map(value => this.props.foods[value].price * foodList[value])
            .reduce((a, b) => a + b, 0) * this.props.promo[this.props.checkout.promoCode].discount / 100;

            discount = Math.round(discount / 100) * 100;

            if (discount > this.props.promo[this.props.checkout.promoCode].maximum) {
                discount = this.props.promo[this.props.checkout.promoCode].maximum;
            }

            return discount;
        }
        else {
            return 0;
        }
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
                            {
                                Object.keys(this.props.checkout.foodList).map(value => {
                                    return(
                                        <tr>
                                            <td class="mdl-data-table__cell--non-numeric">{value}</td>
                                            <td>{this.props.foods[value].price}</td>
                                            <td>{this.props.checkout.foodList[value]}</td>
                                            <td>{this.props.foods[value].price * this.props.checkout.foodList[value]}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                        <tfoot>
                            <tr>
                                <th colspan="3">Total Price</th>
                                <td id="total-price-value">
                                    { this.getTotalPrice(this.props.checkout.foodList) }
                                </td>
                            </tr>

                            <tr>
                                <th colspan="3">Discount <span id="promo-value">{ this.props.checkout.promoCode }</span></th>
                                <td id="discount-value">
                                    { this.getDiscount(this.props.checkout.foodList) }
                                </td>
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

                <Snackbar
                    active={this.state.showCheckOutSnackbar}
                    onTimeout={() => this.disableAddFoodSnackbar()}>{this.state.snackbarMessage}</Snackbar>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);