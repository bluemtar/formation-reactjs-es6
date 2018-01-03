import React from 'react';

class ShoppingItem extends React.Component {

    /*constructor(props) {
        super(props);
    }*/


    render() {
        return (
                 <li key={this.props.id}>{this.props.label}</li>
        )
    }
}

export default ShoppingItem;
