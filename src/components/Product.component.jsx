import React, { Component } from 'react'
import shopData from '../Datas/ShopItem.datas'
import Item from './Item.component'

export default class Product extends Component {
  render() {
    const { product } = this.props
    const matchedProduct = shopData
      .find((obj) => obj.routeName === product)
      .items.map((product) => <Item item={product} key={product.id} />)
    return (
      <>
        <h3 className="text-center">{product.toUpperCase()}</h3>
        <div className="row">{matchedProduct}</div>
      </>
    )
  }
}
