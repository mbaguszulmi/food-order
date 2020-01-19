import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DataTable, TableHeader } from "react-mdl";

const mapStateToProps = state => ({
    ...state
})

class PromoList extends Component {
    state = { promoList: [] };

    componentDidMount() {
        document.title = "Promo List";

        let promoList = [];

        for (let key in this.props.promo) {
            let value = this.props.promo[key];
            value.promoCode = key;

            promoList.push(value);
        }

        this.setState({
            promoList: promoList
        })
    }

    render() {
        return(
            <div>
                <h1>Promo List</h1>

                <div className="table-container">
                    <DataTable
                        shadow={0}
                        rows={this.state.promoList}
                    >
                        <TableHeader name="promoCode" tooltip="Promo Code">Promo Code</TableHeader>
                        <TableHeader numeric name="discount" tooltip="Discount in %">Discount (%)</TableHeader>
                        <TableHeader numeric name="maximum" tooltip="Maximum discount in Rp">Maximum Discount (Rp)</TableHeader>
                    </DataTable>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps)(PromoList);