import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import {DropdownDiv} from "../../styles/DropdownDiv.styles"
import {connect} from "react-redux"

const CartDropdown = (props) => {
  return (
      <Dropdown isOpen={props.toggle} toggle={() => props.dispatch({type:"TOGGLE_DROPDOWN"})} >
        <DropdownToggle className="bg-white border-0 btn-outline-light">
        {props.dropdownToggle}
        </DropdownToggle>
        <DropdownDiv>
        <DropdownMenu className="bg-light border-black">
            <DropdownItem header>Your Items</DropdownItem>
            {props.cart.map(item => (
                <div style={{width:"16.2rem"}} >
            <DropdownItem>
                <div className="d-flex">
                <img src={item.item.imageUrl} style={{width:"4rem"}} />
                <div className="d-flex flex-column ml-4 pr-1" style={{overflow:"hidden", }}>
                    <span >{item.item.name}</span>
                    <small>$ {item.item.price}</small>
                </div>
                </div>
            </DropdownItem>
            <DropdownItem divider />
            </div>
                ))}
              {  (props.cart.length !== 0) ? ( <div className="d-flex"><button className="btn btn-outline-dark btn-sm col m-3">Checkout <i className="fas fa-shopping-cart"></i></button>
           </div> ): null}
          
        </DropdownMenu>
        </DropdownDiv>
        </Dropdown>
  );
}

export default connect(state => (state))(CartDropdown)   