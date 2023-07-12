import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllCategories, selectAllCategoriesObject } from '../../../../store/category-slice';
import Select, { components } from 'react-select';
import { DropdownIndicator } from './dropdown-indicator';


export const SelectField = ({ options, onChange, id }) => {
    // console.log(options);

    const styles = {
        control: (styles, {isSelected, isFocuses}) => ({
            ...styles,
            backgroundColor: 'transparent',
            border: 'none',
            margin: '0px',
            padding: '0px',
            boxSizing: 'border-box',
            color: 'rgba(0, 0, 0, 0.50)',
            minHeight: '0px',
            boxShadow: 'none',
        }),
        singleValue: (styles) => ({
            ...styles,
            color: 'black',
            fontSize: '20px',
        }),
        menu: (styles) => ({
            ...styles,
            backgroundColor: '#DBE2EF',
            border: '2px solid #3F72AF',
            borderRadius: '4px',
            padding: '1px 1px',
        }),
        option: (styles, { isFocused }) => ({
            ...styles,
            backgroundColor: isFocused ? '#3F72AF' : 'transparent',
            borderRadius: '4px',
            color: 'black',
            margin: '0px',
            padding: '0px 5px',
            fontSize: '20px',
        }),
        dropdownIndicator: (styles) => ({
            ...styles,
            padding: '0px',
        }),
        input: (styles) => ({
            ...styles,
            padding: '0px',
            margin: '0px',
            fontSize: '20px'
        }),
        indicatorSeparator: (styles) => ({
            ...styles,
            margin: '0px',
            width: '0px',
        }),
        valueContainer: (styles) => ({
            ...styles,
            padding: '0px 5px',
        }),
        placeholder: (styles) => ({
            ...styles,
            fontSize: '20px',
        }),
    }

    return (
        <Select  id={id} onChange={onChange} options={options} styles={styles} isSearchable={false} components={{ DropdownIndicator }}
            placeholder='Выберите категорию' />
    )
}
