import React, { Component } from 'react'

import ItemList from './ItemList.component'
import items from '../Datas/ListItem.datas'

export default class Main extends Component {
  static defaultProps = {
    items,
  }
  render() {
    return (
      <div className="container-fluid">
        <ItemList items={this.props.items} />
      </div>
    )
  }
}
