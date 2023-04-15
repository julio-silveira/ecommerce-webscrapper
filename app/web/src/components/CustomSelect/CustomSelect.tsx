import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent
} from '@mui/material'
import React from 'react'
import { SelectOption } from '../../types'

type Props = {
  options: SelectOption[]
  handleChange: (event: SelectChangeEvent<string>) => void
  inputValue: string | number
  label: string
  name: string
}

export default function CustomSelect({
  options,
  handleChange,
  inputValue,
  label,
  name
}: Props) {
  return (
    <FormControl sx={{ minWidth: '150px' }} size="small">
      <InputLabel>{label}</InputLabel>
      <Select
        onChange={handleChange}
        displayEmpty
        value={`${inputValue}`}
        size="small"
        name={name}
        label={label}
        autoWidth
      >
        <MenuItem sx={{ display: 'none' }} value=""></MenuItem>
        {options.map(({ value, name }) => (
          <MenuItem key={value} value={value}>
            {name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}
