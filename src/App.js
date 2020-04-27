import React from 'react'
import './App.css'

import Main from './components/Main.component'
import Shop from './components/Shop.component'
import SignIn from './components/Authentication/SignIn.component'
import SignUp from './components/Authentication/SignUp.component'
import Checkout from './components/Checkout.component'
import Product from './components/Product.component'

import ShopItemDatas from './Datas/ShopItem.datas'
import { Route, Switch, Redirect } from 'react-router-dom'
import Navbar from './components/Navbar.component'

import { connect } from 'react-redux'

import { auth, createUserProfileDocument } from './firebase/firebase.utils'

class App extends React.Component {
  unsubscribeFromAuth = null
  componentDidMount() {
    const { dispatch } = this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot((snapshot) => {
          dispatch({
            type: 'SET_LOGGED_IN_USER',
            payload: {
              id: snapshot.id,
              ...snapshot.data(),
            },
          })
        })
      } else {
        return dispatch({ type: 'SET_LOGGED_IN_USER', payload: userAuth })
      }
    })
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    const { user } = this.props
    return (
      <div className="App container-fluid mt-4">
        <Navbar />
        <Switch>
          <Route exact path="/" render={Main} />
          <Route
            exact
            path="/signin"
            render={() =>
              user.loggedInUser ? <Redirect to="/" /> : <SignIn />
            }
          />
          <Route
            exact
            path="/signup"
            render={() =>
              user.loggedInUser ? <Redirect to="/" /> : <SignUp />
            }
          />
          <Route
            exact
            path="/shop"
            render={() => <Shop itemsArray={ShopItemDatas} />}
          />
          <Route exact path="/shop/:product" render={() => <Product />} />
          <Route exact path="/checkout" component={Checkout} />
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
}

const mapStateToProps = (state) => state

export default connect(mapStateToProps)(App)
