import React, { Component } from 'react'

import {withRouter} from "react-router-dom"

import ItemList from './ItemList.component'
import items from '../Datas/ListItem.datas'


 class Main extends Component {
  static defaultProps = {
    items,
  }
  render() {
    return (
      <div>
        <ItemList items={this.props.items} />
      </div>
    )
  }
}

export default withRouter(Main)