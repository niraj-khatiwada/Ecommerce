import React, { Component } from 'react'
import Item from './Item.component'

import { withRouter, Link } from 'react-router-dom'

import { Collection, Row } from '../styles/Shop.styles'

class Shop extends Component {
  render() {
    const { itemsArray } = this.props

    const shopItemArray = itemsArray.map((collectionItem) => {
      return (
        <React.Fragment key={collectionItem.title}>
          <div className="d-flex mt-4 justify-content-between px-3">
            <h3 className="">{collectionItem.title}</h3>
            <Link
              to={`/shop/${collectionItem.title.toLowerCase()}`}
              className="text-dark"
            >
              See all {collectionItem.title}...
            </Link>
          </div>

          <Row className="row col m-0 p-0">
            {collectionItem.items.map((item, index) =>
              index <= 3 ? <Item item={item} key={item.id} /> : null
            )}
          </Row>
        </React.Fragment>
      )
    })
    return (
      <Collection className="container-fluid">
        <h1 className="text-center display-5">Collections</h1>
        <div className="row flex-column">{shopItemArray}</div>
      </Collection>
    )
  }
}

export default withRouter(Shop)
