import React, { Component } from 'react';
import { Textfield, Button, DataTable, TableHeader } from "react-mdl";

class Checkout extends Component {
    state={
        foodList: {
            PIZZA: {
                foodName: "Pizza",
                price: 10000
            },
            BURGER: {
                foodName: "Burger",
                price: 10000
            }
        },
        foodOptions: []
    }

    componentDidMount() {
        document.title = "Check Out";

        let html = `
            <tfoot>
                <tr>
                    <th colspan="3">Total Price</th>
                    <td>10000</td>
                </tr>

                <tr>
                    <th colspan="3">Discount</th>
                    <td>-10000</td>
                </tr>

                <tr>
                    <th colspan="3">Delivery Fee</th>
                    <td>3000</td>
                </tr>

                <tr>
                    <th colspan="3">Total</th>
                    <td>3000</td>
                </tr>
            </tfoot>
        `;

        document.querySelector("#checkout-table").insertAdjacentHTML("beforeend", html);

        let foodOptions = [];
        for (const key in this.state.foodList) {
            if (this.state.foodList.hasOwnProperty(key)) {
                const food = this.state.foodList[key];
                
                foodOptions.push(
                    <option key={key} value={food.foodName} />
                )
            }
        }

        this.setState({foodOptions: foodOptions});
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
                        {this.state.foodOptions}
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
                    <DataTable
                        id="checkout-table"
                        shadow={0}
                        rows={[]}
                    >
                        <TableHeader name="foodName" tooltip="Food Name">Food Name</TableHeader>
                        <TableHeader numeric name="price" tooltip="Price in Rp">Price (Rp)</TableHeader>
                        <TableHeader numeric name="quantity" tooltip="Quantity">Quantity</TableHeader>
                        <TableHeader numeric name="subTotal" tooltip="Sub Total in Rp">Sub Total (Rp)</TableHeader>
                    </DataTable>
                </div>
            </div>
        );
    }
}

export default Checkout;