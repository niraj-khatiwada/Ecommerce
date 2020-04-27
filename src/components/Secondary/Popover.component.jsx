import React from 'react'
import { Popover, PopoverHeader, PopoverBody } from 'reactstrap'

const PopoverComp = ({ id, signoutconfirm, toggle, signout }) => {
  return (
    <Popover
      trigger="legacy"
      placement="top"
      isOpen={signoutconfirm}
      target={id}
      toggle={toggle}
      fade={false}
    >
      <PopoverHeader>Sign Out?</PopoverHeader>
      <PopoverBody>
        <button className="btn btn-dark btn-sm" onClick={signout}>
          Sign Out
        </button>
      </PopoverBody>
    </Popover>
  )
}

export default PopoverComp
