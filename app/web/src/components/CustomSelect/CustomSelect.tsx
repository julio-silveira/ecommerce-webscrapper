import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React from 'react'
import { SelectOption } from '../../types'

type Props = {
  options: SelectOption[]
  handleChange: VoidFunction
  inputValue: string | number | []
  label: string
}

export default function CustomSelect({
  options,
  handleChange,
  inputValue,
  label
}: Props) {
  return (
    <FormControl sx={{ minWidth: '150px' }} size="small">
      <InputLabel>{label}</InputLabel>
      <Select
        onChange={handleChange}
        value={inputValue}
        size="small"
        label={label}
        autoWidth
      >
        {options.map(({ value, name }) => (
          <MenuItem key={value} value={value}>
            {name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}
