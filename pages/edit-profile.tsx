import React from 'react'
import TextField from '@mui/material/TextField';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

type Props = {}

function EditProfile({ }: Props) {
  const today = dayjs();
  const [birthDate, setBirthDate] = React.useState<Dayjs | null>(
    today
  );

  const router = useRouter();
  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      state: '',
      dob: ''
    }
  });

  const onSubmit = async (data: any) => {
    console.log('data', data)
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='pageContainerTop'>
        <div className='pageContent'>
          <h2 className='pageTitle'>Profile change kare</h2>
          <div className='d-flex column flex-gap20'>
            <TextField
              className='specialInput'
              id="outlined-basic"
              label="Aapka Naam"
              variant="outlined"
              helperText={errors.name && errors.name.message}
              {...register("name", { required: true })}
            />
            <TextField
              className='specialInput'
              id="outlined-basic"
              label="Email Address"
              variant="outlined"
              helperText={errors.email && errors.email.message}
              {...register("email", {
                required: { value: true, message: 'Email dalna zaruri hai' }, pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address"
                }
              })}
            />
            <TextField
              className='specialInput'
              id="outlined-basic"
              label="Phone Number"
              variant="outlined"
              helperText={errors.phone && errors.phone.message}
              {...register("phone", {
                required: { value: true, message: 'Phone number dalna zaruri hai' },
                minLength: {value: 10, message:'Phone number 10 digit ka hona chahiye'},
                maxLength: {value: 10, message:'Phone number 10 digit ka hona chahiye'},
              })}
            />

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <MobileDatePicker
                label="Aapka Janam din"
                inputFormat="MM/DD/YYYY"
                onChange={(value) => {
                  setBirthDate(value)
                }}
                renderInput={(params) => <TextField {...params} helperText={errors.dob && errors.dob.message}
                  {...register("dob", {
                    required: { value: true, message: 'Jana din dalna zaruri hai' }
                  })} />}
                className='specialInput'
                maxDate={today}
                value={undefined}
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

export default EditProfile