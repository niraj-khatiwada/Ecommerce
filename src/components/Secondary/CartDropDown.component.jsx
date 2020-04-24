import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import {DropdownDiv} from "../../styles/DropdownDiv.styles"


const CartDropdown = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle className="bg-white border-0 btn-outline-light">
        {props.dropdownToggle}
        </DropdownToggle>
        <DropdownDiv>
        <DropdownMenu>
            <DropdownItem header>Header</DropdownItem>
            <DropdownItem>Some Action ajsbhjasbhsbahjbh</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Foo Action</DropdownItem>
            <DropdownItem>Bar Action</DropdownItem>
            <DropdownItem>Quo Action</DropdownItem>
        </DropdownMenu>
        </DropdownDiv>
        </Dropdown>
  );
}

export default CartDropdown;