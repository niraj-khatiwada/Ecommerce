import React, { Component } from 'react'

import { ItemDiv, AddToCart } from '../styles/Item.styles'

import { withRouter } from 'react-router-dom'

import { connect } from 'react-redux'

class Item extends Component {
  render() {
    const { item, cart, dispatch } = this.props
    return (
      <div className="col-md-3 m-0 p-0">
        <ItemDiv
          className=" d-flex text-center align-items-end"
          style={{ background: `url(${item.imageUrl})center/cover no-repeat` }}
        >
          <AddToCart
            onClick={() =>
              dispatch({
                type: 'ADD_TO_CART',
                payload: { id: item.id, item: item },
              })
            }
          >
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

const mapStateToProps = (state) => state

export default connect(mapStateToProps)(withRouter(Item))
