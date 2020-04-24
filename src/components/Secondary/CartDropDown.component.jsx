import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import {DropdownDiv} from "../../styles/DropdownDiv.styles"
import {connect} from "react-redux"

import {withRouter } from "react-router-dom"

const CartDropdown = (props) => {
    const handleToggle= () => props.dispatch({type:"TOGGLE_DROPDOWN"})
  return (
      <Dropdown isOpen={props.toggle} toggle={handleToggle}>
        <DropdownToggle className="bg-white border-0 btn-outline-light">
        {props.dropdownToggle}
        </DropdownToggle>
        <DropdownDiv>
        <DropdownMenu right className="bg-light border-black"  style={{overflowY:"scroll", maxHeight:"30rem"}} right>
            <DropdownItem header className="text-center">{(props.cart.length!== 0) ? "Your Items" : "No Items" }</DropdownItem>
            {props.cart.map(item => (
                <div key={item.id}>
            <DropdownItem>
                <div className="d-flex">
                <img src={item.item.imageUrl} style={{width:"4rem"}} />
                <div className="d-flex flex-column ml-3 pr-1" style={{overflow:"hidden", }}>
                    <span >{item.item.name}</span>
                    <span>$ {item.item.price}</span>
                    <span>x {item.quantity}</span>
                </div>
                </div>
            </DropdownItem>
            <DropdownItem divider />
            </div>
                ))}
              {  (props.cart.length !== 0) ? ( <div className="d-flex"><button 
              className="btn btn-outline-dark btn-sm col m-3" onClick={() => {
                  handleToggle()
                  props.history.push("/checkout")}} >Checkout <i className="fas fa-shopping-cart"></i></button>
           </div> ): null}
          
        </DropdownMenu>
        </DropdownDiv>
        </Dropdown>
  );
}

export default connect(state => (state))(withRouter(CartDropdown))   