import React, { useState } from 'react';
// import dayjs from 'dayjs';
// import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
// import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
// import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import dayjs from 'dayjs';
import ru from 'dayjs/locale/ru'
import {LocalizationProvider} from '@mui/x-date-pickers';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { ruRU } from '@mui/x-date-pickers/locales';

export default function Datepicker() {
    const [date, dateChange] = useState("")

    const dateChangeHandler = (value) => {
        dateChange(value.$d.toLocaleDateString())
        console.log(value.$d.toLocaleDateString())
    }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} localeText={ruRU.components.MuiLocalizationProvider.defaultProps.localeText}>
        <StaticDatePicker 
        // value={date}    
            defaltValue={dayjs().locale("ru")} 
            
            onChange={newValue => dateChangeHandler(newValue)}
        />
    </LocalizationProvider>
  )
}
