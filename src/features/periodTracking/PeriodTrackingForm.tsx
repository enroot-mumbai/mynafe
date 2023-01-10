import React from 'react'
import TextField from '@mui/material/TextField';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';
import { useForm } from "react-hook-form";

type Props = {}

function PeriodTrackingForm({ }: Props) {
    const today = dayjs();
    const [startDate, setStartDate] = React.useState<Dayjs | null>(
        today
    );
    const [endDate, setEndDate] = React.useState<Dayjs | null>(
        today
    );

    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        defaultValues: {
            startDate: '',
            endDate: ''
        }
    });

    const onSubmit = async (data: any) => {
        console.log('data', data)
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <div className='d-flex column flex-gap30 w-100 mt-30'>
                    <MobileDatePicker
                        label="Period shuru hone ki taarikh"
                        inputFormat="MM/DD/YYYY"
                        value={startDate}
                        onChange={(value) => {
                            setStartDate(value)
                        }}
                        renderInput={(params) => 
                            <TextField {...params} helperText={errors.startDate && errors.startDate.message}
                            {...register("startDate", {
                                required: { value: true, message: 'Jana din dalna zaruri hai' }
                            })} />}
                        className='specialInput'
                        maxDate={today}
                    />

                    <MobileDatePicker
                        label="Period khatam hone ki taarikh"
                        inputFormat="MM/DD/YYYY"
                        value={endDate}
                        onChange={(value) => {
                            setEndDate(value)
                        }}
                        renderInput={(params) => 
                            <TextField {...params} helperText={errors.endDate && errors.endDate.message}
                            {...register("endDate", {
                                required: { value: true, message: 'Jana din dalna zaruri hai' }
                            })} />}
                        className='specialInput'
                        maxDate={today}
                    />

                    <button onClick={handleSubmit(onSubmit)} className='primaryButton w-100'>
                        Period track kare
                    </button>
                </div>
            </LocalizationProvider>
        </form>
    )
}

export default PeriodTrackingForm