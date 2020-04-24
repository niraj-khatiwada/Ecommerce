import React from 'react'
import './App.css'

import Main from './components/Main.component'
import Shop from './components/Shop.component'
import SignIn from './components/Authentication/SignIn.component'
import SignUp from './components/Authentication/SignUp.component'

import ShopItemDatas from './Datas/ShopItem.datas'
import { Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar.component'

import { connect } from 'react-redux'

import { auth, createUserProfileDocument } from './firebase/firebase.utils'

class App extends React.Component {
  constructor(props) {
    super(props)
  }
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
    return (
      <div className="App container-fluid mt-4">
        <Navbar />
        <Switch>
          <Route exact path="/" render={Main} />

          <Route exact path="/signin" render={() => <SignIn />} />
          <Route exact path="/signup" render={() => <SignUp />} />
          <Route
            exact
            path="/shop"
            render={() => <Shop itemsArray={ShopItemDatas} />}
          />

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
