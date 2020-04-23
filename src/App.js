import React from 'react'
import './App.css'

import Main from './components/Main.component'
import Item from './components/Item.component'
import Shop from './components/Shop.component'

import ShopItemDatas from './Datas/ShopItem.datas'
import { Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar.component'

function App() {
  return (
    <div className="App container-fluid mt-4">
      <Navbar />
      <Switch>
        <Route exact path="/" render={Main} />
        <Route
          exact
          path="/shop"
          render={() => <Shop itemsArray={ShopItemDatas} />}
        />
        <Route exact path="/:item" render={Item} />
        <Route
          render={() => (
            <h1 className="alert alert-danger text-center ">
              404 Page Not Found
            </h1>
          )}
        />
      </Switch>
    </div>
  )
}

export default App
