import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DataTable, TableHeader } from "react-mdl";

const mapStateToProps = state => ({
    ...state
})

class FoodList extends Component {
    state = { foodList: [] };

    componentDidMount() {
        console.log(this.props);
        document.title = "Food List";

        let foodList = [];

        for (let key in this.props.foods) {
            let value = this.props.foods[key];

            foodList.push(value);
        }

        this.setState({
            foodList: foodList
        })
    }

    render() {
        return(
            <div>
                <h1>Food List</h1>
                <div className="table-container">
                    <DataTable
                        shadow={0}
                        rows={this.state.foodList}
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