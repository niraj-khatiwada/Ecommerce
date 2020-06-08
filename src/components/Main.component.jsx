import React, { Component } from 'react'

import { withRouter } from 'react-router-dom'

import ItemList from './ItemList.component'
import items from '../Datas/ListItem.datas'
import Carousel from './Carousel.component'

class Main extends Component {
  static defaultProps = {
    items,
  }
  render() {
    return (
      <div>
        <Carousel />
        <ItemList items={this.props.items} />
      </div>
    )
  }
}

export default withRouter(Main)
