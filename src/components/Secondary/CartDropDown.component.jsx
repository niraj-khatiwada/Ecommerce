import React from 'react'
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap'

import { DropdownDiv } from '../../styles/DropdownDiv.styles'
import { connect } from 'react-redux'

import { withRouter } from 'react-router-dom'

import { selectCartArray } from '../../reducers/CartItems/cart.selectors'
import { toggleDropdown } from '../../reducers/CartItems/addtToCart.actions'

const CartDropdown = (props) => {
  const handleToggle = props.toggleDispatch
  const sortedCartArray = props.cartArray.sort(
    (a, b) => b.quantity - a.quantity
  )
  return (
    <Dropdown isOpen={props.toggle} toggle={handleToggle}>
      <DropdownToggle className="bg-white border-0 btn-outline-light">
        {props.dropdownToggle}
      </DropdownToggle>
      <DropdownDiv>
        <DropdownMenu
          right
          className="bg-light border-black"
          style={{ overflowY: 'scroll', maxHeight: '30rem', width: '18rem' }}
        >
          <DropdownItem header className="text-center">
            {sortedCartArray.length !== 0 ? 'Your Items' : 'No Items'}
          </DropdownItem>
          {sortedCartArray.map((item) => (
            <div key={item.id}>
              <DropdownItem>
                <div className="d-flex">
                  <img
                    src={item.item.imageUrl}
                    alt="product"
                    style={{ width: '4rem' }}
                  />
                  <div
                    className="d-flex flex-column ml-3 pr-1"
                    style={{ overflow: 'hidden' }}
                  >
                    <span>{item.item.name}</span>
                    <span>$ {item.item.price}</span>
                    <span>x {item.quantity}</span>
                  </div>
                </div>
              </DropdownItem>
              <DropdownItem divider />
            </div>
          ))}
          {sortedCartArray.length !== 0 ? (
            <div className="d-flex">
              <button
                className="btn btn-outline-dark btn-sm col m-3"
                onClick={() => {
                  handleToggle()
                  props.history.push('/checkout')
                }}
              >
                Checkout <i className="fas fa-shopping-cart"></i>
              </button>
            </div>
          ) : null}
        </DropdownMenu>
      </DropdownDiv>
    </Dropdown>
  )
}

const mapStateToProps = (state) => {
  return {
    cartArray: selectCartArray(state),
    history: state.history,
    toggle: state.toggle,
  }
}

const mapDispatchToProps = (dispatch) => ({
  toggleDispatch: () => dispatch(toggleDropdown()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(CartDropdown))
