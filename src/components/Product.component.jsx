import React, { Component } from 'react'
import shopData from '../Datas/ShopItem.datas'
import Item from './Item.component'
import { Redirect } from 'react-router-dom'

export default class Product extends Component {
  render() {
    const { product } = this.props
    const matchedProduct = shopData.find((obj) => obj.routeName === product)
    const individualProduct = matchedProduct ? (
      <>
        <h3 className="text-center">{product.toUpperCase()}</h3>
        <div className="row">
          {matchedProduct.items.map((product) => (
            <Item item={product} key={product.id} />
          ))}
        </div>
      </>
    ) : (
      <>
        <h2 className="text-center">Product not found</h2>
        <Redirect exact to="/shop" />
      </>
    )

    return individualProduct
  }
}
