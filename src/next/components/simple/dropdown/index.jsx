import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const DropdownButton = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const { items } = props;
  let options = items.map((item) => {
    return (
      <DropdownItem >{item}</DropdownItem>
    )
  })

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>
        {props.header}
      </DropdownToggle>
      <DropdownMenu>
        {options}
      </DropdownMenu>
    </Dropdown>
  );
}

export default DropdownButton;
