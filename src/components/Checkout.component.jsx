import React, { Component } from 'react'

import { createStructuredSelector } from 'reselect'
import { selectCartArray } from '../reducers/CartItems/cart.selectors'
import { connect } from 'react-redux'

import { ProductImage, TableData } from '../styles/Checkout.styles'

class Checkout extends Component {
  render() {
    const { sortedArray } = this.props
    const middleAlign = { verticalAlign: 'middle' }
    const total = sortedArray.reduce(
      (accumulator, currvalue) =>
        accumulator + currvalue.quantity * currvalue.item.price,
      0
    )
    return (
      <div className="container">
        <h3> Checkout</h3>
        <table class="table table-hover">
          <thead class="thead-dark">
            <tr>
              <th scope="colz">S.N</th>
              <th scope="colz">Product</th>
              <th scope="col">Description</th>
              <th scope="col">Price</th>
              <th scope="col" className="text-center">
                Quantity
              </th>
              <th scope="col">Total</th>
              <th scope="col" className="text-center">
                Remove
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedArray.map((item, index) => (
              <tr>
                <th scope="row" style={middleAlign}>
                  {index}
                </th>
                <TableData style={middleAlign}>
                  <ProductImage src={item.item.imageUrl} alt="productImage" />
                </TableData>
                <TableData style={middleAlign}>
                  <h5>{item.item.name}</h5>
                </TableData>
                <TableData style={middleAlign}>
                  <h5>$ {item.item.price}</h5>
                </TableData>
                <TableData style={middleAlign}>
                  <div className="w-100 d-flex justify-content-around">
                    <button className="btn btn-dark ">-</button>
                    <h5>{item.quantity}</h5>
                    <button className="btn btn-dark ">+</button>
                  </div>
                </TableData>
                <TableData style={middleAlign}>
                  <h5>$ {item.quantity * item.item.price}</h5>
                </TableData>
                <TableData style={middleAlign}>
                  <button className="btn btn-dark w-100">Remove</button>{' '}
                </TableData>
              </tr>
            ))}
          </tbody>
        </table>
        <h4 className="text-right p-3">Total= {total}</h4>
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  sortedArray: selectCartArray,
})

export default connect(mapStateToProps, null)(Checkout)
