import React, { Component } from 'react';
import { Textfield, Button, Snackbar } from "react-mdl";

class AddPromo extends Component {
    state={ isAddPromoSucceed: false };

    componentDidMount() {
        document.title = "Add Promo";
    }

    render() {
        return(
            <div>
                <h1>Add Promo</h1>

                <div className="add-food-container">
                    <Textfield
                        onChange={() => {}}
                        label="Promo Code"
                        floatingLabel
                        style={{width: '200px', display: 'block'}}
                    />

                    <Textfield
                        onChange={() => {}}
                        label="Discount (%)"
                        floatingLabel
                        pattern="-?[0-9]*(\.[0-9]+)?"
                        error="Discount must be in number"
                        style={{width: '200px', display: 'block'}}
                    />

                    <Textfield
                        onChange={() => {}}
                        label="Maximum"
                        floatingLabel
                        pattern="-?[0-9]*(\.[0-9]+)?"
                        error="Maximum discount must be in number"
                        style={{width: '200px', display: 'block'}}
                    />

                    <Button id="add-btn" raised accent ripple>Add</Button>
                </div>

                <Snackbar
                    active={this.state.isAddPromoSucceed}
                    onTimeout={() => this.disableAddFoodSnackbar()}
                    action="View Promo"
                    onClick={this.viewFood}>Add Promo succeeded</Snackbar>
            </div>
        );
    }
}

export default AddPromo;