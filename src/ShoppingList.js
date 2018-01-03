import React from 'react';
import axios from 'axios';
import ShoppingItem from './ShoppingItem';

class ShoppingList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {items:[]};
    }

    componentDidMount() {
        console.log('component did mount');
        axios.get('./items.json')
            .then(resp => resp.data)
            .then(items => {
                this.setState({items:items});
                console.log(items); // TODO: mettre le state a jour
            })
    }

    render() {
        return (
            <div>
                <div>{this.props.title}</div>
                <ul>{ this.state.items.map(item => <li key={item.id}>{item.label}</li>) }</ul>

                <div>
                    <div>{this.props.title}</div>
                    <ul>{ this.state.items.map(item => 
                    <ShoppingItem id={item.id} label={item.label}/>
                    )} </ul>
                 </div>

                 <ShoppingListInternal title ={this.props.title} items ={this.state.items}/>
            </div>
        )
    }
}

const ShoppingListInternal = ({title, items})=>
            <div>
                <h2>{title}</h2>
                <ul>{items.map(item => <ShoppingItem id={item.id} label={item.label}/>)} </ul>
            </div>

export default ShoppingList;
