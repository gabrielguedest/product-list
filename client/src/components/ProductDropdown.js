import React from "react";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

const ProductDropdown = props => (
  <UncontrolledDropdown>
    <DropdownToggle caret className="dropdown-product">
      {props.limit} produtos por página &nbsp;
    </DropdownToggle>
    <DropdownMenu>
      <DropdownItem onClick={() => props.handleLimit(10)}>
        10 produtos por página
      </DropdownItem>
      <DropdownItem onClick={() => props.handleLimit(20)}>
        20 produtos por página
      </DropdownItem>
      <DropdownItem onClick={() => props.handleLimit(30)}>
        30 produtos por página
      </DropdownItem>
      <DropdownItem onClick={() => props.handleLimit(40)}>
        40 produtos por página
      </DropdownItem>
    </DropdownMenu>
  </UncontrolledDropdown>
);

export default ProductDropdown;
