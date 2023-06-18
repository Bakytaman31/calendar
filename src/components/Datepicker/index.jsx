import React, { useState } from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/ru'
import {LocalizationProvider} from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

export default function Datepicker() {
    const [date, dateChange] = useState({default: dayjs(), day: ""})

    const dateChangeHandler = (value) => {
        dateChange(value.$d.toLocaleDateString())
        console.log(value.$d.toLocaleDateString())
    }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ru">
        <DateCalendar 
        
        value={date.day ? date.day : date.default}    
        
        onMonthChange={newValue => console.log(newValue)}
            onChange={newValue => dateChangeHandler(newValue)}
        />
    </LocalizationProvider>
  )
}
