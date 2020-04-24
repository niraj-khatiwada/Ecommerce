import React, { useState } from 'react';
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';

const PopoverComp = ({id,signoutconfirm , toggle,signout}) => {  
  return (
    <div >
      <Popover placement="bottom" isOpen={signoutconfirm} target={id} toggle={toggle}>
        <PopoverHeader>Sign Out?</PopoverHeader>
        <PopoverBody><button className="btn btn-dark btn-sm" onClick={signout}>Sign Out</button></PopoverBody>
      </Popover>
    </div>
  );
}



export default PopoverComp;