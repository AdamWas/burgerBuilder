import React, {Component} from 'react';

import Aux from '../../../hoc/Com'
import Button from '../../UI/Button/Button'

class OrderSummary extends Component {
    // This can be func. component
    render () {
        const ingredientSummary = Object.keys(this.props.ingredients)
        .map(igKey => {
            return <li key={igKey}>
                    <span style={{textTransform: 'capitalize'}}>
                        {igKey}
                    </span>: {this.props.ingredients[igKey]}
                </li>
        });
        return (
            <Aux>
                <h3>Your Order</h3>
                <p>A burger with:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total price: {this.props.price.toFixed(2)}</strong></p>
                <p>Checkout?</p>
                <Button btnType="Danger"
                clicked={this.props.purchaseCancelled}>CANCEL</Button>
                <Button btnType="Success"
                clicked={this.props.purchaseContinued}>CONTINUE</Button>
            </Aux>
        );
    };

};

export default OrderSummary;