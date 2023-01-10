import React from 'react'
import TextField from '@mui/material/TextField';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

type Props = {}

function Onboarding({ }: Props) {
  const router = useRouter();
  const today = dayjs();
  const [birthDate, setBirthDate] = React.useState<Dayjs | null>(
    today
  );

  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    defaultValues: {
      name: '',
      address: '',
      city: '',
      state: '',
      dob: ''
    }
  });

  const onSubmit = async (data: any) => {
    console.log('data', data)
    router.push('/onboarding/steps')
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='pageContainerCenter'>
        <div className='pageContent'>
          <h2 className='pageTitle'>Onboarding</h2>
          <div className='d-flex column flex-gap20'>
            <TextField
              className='specialInput'
              id="outlined-basic"
              label="Aapka Naam"
              variant="outlined"
              helperText={errors.name && errors.name.message}
              {...register("name", { required: true })}
            />

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <MobileDatePicker
                label="Aapka Janam din"
                inputFormat="MM/DD/YYYY"
                value={birthDate}
                onChange={(value) => {
                  setBirthDate(value)
                }}
                renderInput={(params) => <TextField {...params} helperText={errors.dob && errors.dob.message}
                  {...register("dob", {
                    required: { value: true, message: 'Jana din dalna zaruri hai' }
                  })} />}
                className='specialInput'
                maxDate={today}
              />
            </LocalizationProvider>


            <TextField
              className='specialInput'
              id="outlined-basic"
              label="Aapka Address"
              variant="outlined"
              helperText={errors.address && errors.address.message}
              {...register("address", {
                required: { value: true, message: 'Address dalna zaruri hai' }
              })}
            />

            <TextField
              className='specialInput'
              id="outlined-basic"
              label="Aapki City"
              variant="outlined"
              helperText={errors.city && errors.city.message}
              {...register("city", {
                required: { value: true, message: 'City dalna zaruri hai' }
              })}
            />

            <TextField
              className='specialInput'
              id="outlined-basic"
              label="Aapka State"
              variant="outlined"
              helperText={errors.state && errors.state.message}
              {...register("state", {
                required: { value: true, message: 'State dalna zaruri hai' }
              })}
            />

            <button onClick={handleSubmit(onSubmit)} className='primaryButton w-100'>
              Submit Details
            </button>
          </div>

        </div>

      </div>
    </form>
  )
}

export default Onboarding