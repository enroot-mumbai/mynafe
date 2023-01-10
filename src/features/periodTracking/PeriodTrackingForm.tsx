import React from 'react'
import TextField from '@mui/material/TextField';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';

type Props = {}

function PeriodTrackingForm({ }: Props) {
    const today = dayjs();
    const [startDate, setStartDate] = React.useState<Dayjs | null>(
        today
    );
    const [endDate, setEndDate] = React.useState<Dayjs | null>(
        today
    );
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <div className='d-flex column flex-gap30 w-100 mt-30'>
                <MobileDatePicker
                    label="Period shuru hone ki taarikh"
                    inputFormat="MM/DD/YYYY"
                    value={startDate}
                    onChange={(value)=>{
                        setStartDate(value)
                    }}
                    renderInput={(params) => <TextField {...params} />}
                    className='specialInput'
                    maxDate={today}
                />

                <MobileDatePicker
                    label="Period khatam hone ki taarikh"
                    inputFormat="MM/DD/YYYY"
                    value={endDate}
                    onChange={(value)=>{
                        setEndDate(value)
                    }}
                    renderInput={(params) => <TextField {...params} />}
                    className='specialInput'
                    maxDate={today}
                />

                <button className='primaryButton w-100'>
                    Period track kare
                </button>
            </div>
        </LocalizationProvider>
    )
}

export default PeriodTrackingForm