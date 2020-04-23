import React, { Component } from 'react'

import {ItemDiv, AddToCart} from "../styles/Item.styles"

import { withRouter } from 'react-router-dom'

class Item extends Component {
    render() {
        const {match, item} = this.props
        return (
            <div className="col-md-3 m-0 p-0">
                <ItemDiv className=" d-flex text-center align-items-end" style={{background: `url(${item.imageUrl})center/cover no-repeat`}}>  
                <AddToCart >
                    <h5>Add to cart</h5>
                </AddToCart>    
                </ItemDiv>
                <div className="mx-3 d-flex justify-content-between">
                    <h5>{item.name}</h5>
                <h5>{`$ ${item.price}`}</h5>
                </div>
            </div>
        )
    }
}

export default withRouter(Item)