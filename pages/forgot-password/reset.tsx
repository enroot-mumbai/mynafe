import Link from 'next/link'
import React from 'react'
import TextField from '@mui/material/TextField';
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

type Props = {}

function Reset({ }: Props) {
  const router = useRouter();
  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    defaultValues: {
      password: '',
      confirmPassword: '',
    }
  });

  const onSubmit = async (data: any) => {
    delete data.confirmPassword;
    // if (user) {
    //     router.push("/login");
    // }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='pageContainerCenter'>
        <div className='pageContent'>
          <h2 className='pageTitle'>Reset Password</h2>
          <div className='d-flex column flex-gap20'>
            <TextField
              className='specialInput'
              id="outlined-basic"
              label="Aapka naya password"
              variant="outlined"
              helperText={errors.password && errors.password.message}
              {...register("password", { required: true })}

            />
            <TextField
              className='specialInput'
              id="outlined-basic"
              label="Naya password confirm kare"
              variant="outlined"
              helperText={errors.confirmPassword && errors.confirmPassword.message}
              {...register("confirmPassword", {
                required: true,
                validate: (val: string) => {
                  if (watch('password') != val) {
                    return "Dono password same hone chahiye";
                  }
                },
              })}
            />

            <button onClick={handleSubmit(onSubmit)} className='primaryButton w-100'>
              Reset password
            </button>

            <span className='divider'></span>

            <Link className='text-link' href={'/login'}>
              Yaha Login kare
            </Link>
          </div>
        </div>
      </div>
    </form>
  )
}

export default Reset