import React from "react";
import { MenuItem, Select } from "@material-ui/core";
import { DROPDOWN_BOTTOM_SETUP } from "../../constants/CoreConstants";
import { BootstrapInput } from "./BootstrapInput";

const CustomSelect = (props) => {
  return (
    <>
      <Select
        id={props.dropdownLabelId}
        value={props.value}
        MenuProps={DROPDOWN_BOTTOM_SETUP}
        input={<BootstrapInput />}
        onChange={props.handleChangeMenu}
      >
        {props.type.map((eachType, index) => {
          return (
            <MenuItem key={eachType} value={eachType} disableRipple>
              <span id={props.dropdownTypeId}>{eachType}</span>
            </MenuItem>
          );
        })}
      </Select>
    </>
  );
};

export default CustomSelect;
