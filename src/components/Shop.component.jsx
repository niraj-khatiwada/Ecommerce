import React, { Component } from 'react'

import {withRouter} from "react-router-dom"

import {Collection,Item,Row, AddToCart} from "../styles/Shop.styles"

class Shop extends Component {
    render() {
        const {itemsArray} = this.props

        const shopItemArray = itemsArray.map(collectionItem => {
            return <>
            <h3 className="text-center mt-4">{collectionItem.title}</h3>
                <Row className="row col m-auto">
                    {collectionItem.items.map((item,index) => (
                        (index <= 3 ) ? (
                        <div className="col-md-3 m-0 p-0">
                        <Item className=" d-flex text-center align-items-end" style={{background: `url(${item.imageUrl})center/cover no-repeat`}}>  
                        <AddToCart >
                            <h5>Add to cart</h5>
                        </AddToCart>    
                        </Item>
                        <div className="mx-3 d-flex justify-content-between">
                            <h5>{item.name}</h5>
                        <h5>{`$ ${item.price}`}</h5>
                        </div>
                        </div>
                        ) : null
                        
                    ))
                    }  
                </Row>
                   </>
        })  
        return (
            <Collection className="container-fluid">
               <h1 className="text-center display-5">Collections</h1>
               <div className="row flex-column">
                {shopItemArray}
               </div>
            </Collection>   
        )
    }
}

export default withRouter(Shop)