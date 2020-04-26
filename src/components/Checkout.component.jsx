import React, { Component } from 'react'

import { createStructuredSelector } from 'reselect'
import { selectCartArray } from '../reducers/CartItems/cart.selectors'
import { connect } from 'react-redux'

import { ProductImage } from '../styles/Checkout.styles'

class Checkout extends Component {
  render() {
    const { sortedArray } = this.props
    return (
      <div className="container">
        <h3 className="text-center"> Checkout</h3>
        <table class="table table-hover">
          <thead class="thead-dark">
            <tr>
              <th scope="colz">S.N</th>
              <th scope="colz">Product</th>
              <th scope="col">Description</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Total</th>
              <th scope="col">Remove</th>
            </tr>
          </thead>
          <tbody>
            {sortedArray.map((item, index) => (
              <tr>
                <th scope="row">{index}</th>
                <td>
                  <ProductImage src={item.item.imageUrl} alt="productImage" />
                </td>
                <td>
                  <h5>{item.item.name}</h5>
                </td>
                <td>
                  <h5>$ {item.item.price}</h5>
                </td>
                <td>
                  <h5>{item.quantity}</h5>
                </td>
                <td>
                  <h5>
                    $ {parseInt(item.quantity) * parseFloat(item.item.price)}
                  </h5>
                </td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  sortedArray: selectCartArray,
})

export default connect(mapStateToProps, null)(Checkout)
