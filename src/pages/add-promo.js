import React, { Component } from 'react';
import { Textfield, Button, Snackbar } from "react-mdl";
import { connect } from 'react-redux';
import { addPromo } from '../actions/addPromo';

const mapStateToProps = state => ({
    ...state
})

const mapDispatchToProps = dispatch => ({
    addPromo: (promoData) => dispatch(addPromo(promoData))
})

class AddPromo extends Component {
    state={ isAddPromoSucceed: false };

    componentDidMount() {
        document.title = "Add Promo";

        document.querySelector("#textfield-PromoCode").addEventListener("input", event => {
            let promoInput = event.target;
            promoInput.value = promoInput.value.toUpperCase();
        });

        document.querySelector("#add-btn").addEventListener("click", () => {
            let promoCode = document.querySelector("#textfield-PromoCode").value;
            let discount = document.querySelector("#textfield-Discount").value;
            let maximum = document.querySelector("#textfield-Maximum").value;
            
            if (promoCode.trim() !== "" && discount.trim()!== "" && !isNaN(discount.trim()) && maximum.trim()!== "" && !isNaN(maximum.trim())) {
                this.props.addPromo({
                    promoCode: promoCode,
                    promoData: {
                        discount: discount,
                        maximum: maximum
                    }
                });

                document.querySelector("#textfield-PromoCode").value = null;
                document.querySelector("#textfield-Discount").value = null;
                document.querySelector("#textfield-Maximum").value = null;

                this.setState({
                    isAddPromoSucceed: true
                });
            }
        });
    }

    disableAddPromoSnackbar() {
        this.setState({
            isAddPromoSucceed: false
        });
    }

    viewPromo() {
        window.location.hash = "#/promo-list"
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
                    onTimeout={() => this.disableAddPromoSnackbar()}
                    action="View Promo"
                    onClick={this.viewPromo}>Add Promo succeeded</Snackbar>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPromo);