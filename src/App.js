import React from 'react'
import './App.css'

import Main from './components/Main.component'
import Shop from './components/Shop.component'
import SignIn from './components/Authentication/SignIn.component'
import SignUp from './components/Authentication/SignUp.component'

import ShopItemDatas from './Datas/ShopItem.datas'
import { Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar.component'

import { auth, createUserProfileDocument } from './firebase/firebase.utils'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      loggedInUser: null,
    }
  }

  unsubscribeFromAuth = null
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot((snapshot) => {
          this.setState(
            {
              loggedInUser: {
                id: snapshot.id,
                ...snapshot.data(),
              },
            },
            () => console.log(this.state)
          )
        })
      } else {
        return this.setState({ loggedInUser: userAuth })
      }
    })
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div className="App container-fluid mt-4">
        <Navbar loggedInUser={this.state.loggedInUser} />
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

export default App
