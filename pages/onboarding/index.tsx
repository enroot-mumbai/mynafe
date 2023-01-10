import React from 'react'
import TextField from '@mui/material/TextField';
import { useRouter } from 'next/router';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';

type Props = {}

function Onboarding({ }: Props) {
  const router = useRouter();
  const today = dayjs();
  const [birthDate, setBirthDate] = React.useState<Dayjs | null>(
    today
  );
  return (
    <div className='pageContainerCenter'>
      <div className='pageContent'>
        <h2 className='pageTitle'>Onboarding</h2>
        <div className='d-flex column flex-gap20'>
          <TextField
            className='specialInput'
            id="outlined-basic"
            label="Aapka Naam"
            variant="outlined"
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <MobileDatePicker
              label="Aapka Janam din"
              inputFormat="MM/DD/YYYY"
              value={birthDate}
              onChange={(value) => {
                setBirthDate(value)
              }}
              renderInput={(params) => <TextField {...params} />}
              className='specialInput'
              maxDate={today}
            />
          </LocalizationProvider>


          <TextField
            className='specialInput'
            id="outlined-basic"
            label="Aapka Janam din"
            variant="outlined"
          />

          <TextField
            className='specialInput'
            id="outlined-basic"
            label="Aapka Address"
            variant="outlined"
          />

          <TextField
            className='specialInput'
            id="outlined-basic"
            label="Aapki City"
            variant="outlined"
          />

          <TextField
            className='specialInput'
            id="outlined-basic"
            label="Aapka State"
            variant="outlined"
          />

          <button onClick={() => {
            router.push('/onboarding/steps')
          }} className='primaryButton w-100'>
            Submit Details
          </button>
        </div>

      </div>

    </div>
  )
}

export default Onboarding