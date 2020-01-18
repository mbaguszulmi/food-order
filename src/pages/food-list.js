import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DataTable, TableHeader } from "react-mdl";

const mapStateToProps = state => ({
    ...state
})

class FoodList extends Component {
    componentDidMount() {
        console.log(this.props);
        document.title = "Food List";
    }

    render() {
        return(
            <div>
                <h1>Food List</h1>

                <div className="table-container">
                <DataTable
                    shadow={0}
                    rows={this.props.foods}
                >
                    <TableHeader name="foodName" tooltip="Food Name">Food Name</TableHeader>
                    <TableHeader numeric name="price" tooltip="Price">Price (Rp)</TableHeader>
                </DataTable>

                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps)(FoodList);