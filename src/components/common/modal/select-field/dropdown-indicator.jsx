import React from 'react';
import Select, { components, DropdownIndicatorProps } from 'react-select';
import {DropDownArrowIcon} from '../../icons/drop-down-arrow-icon';

export const DropdownIndicator = (props) => {
    return (
        <components.DropdownIndicator{...props}>
            <DropDownArrowIcon />
        </components.DropdownIndicator>
    )
}


