import React from 'react'
import TextField from '@mui/material/TextField';
import Link from "next/link";
import { useForm } from "react-hook-form";

type Props = {
    setShowOTP: Function;
}

function RequestResetPassword({ setShowOTP }: Props) {
    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        defaultValues: {
            email: '',
        }
    });

    const onSubmit = async (data: any) => {
        setShowOTP(true);
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
                            label="Email address"
                            variant="outlined"
                            helperText={errors.email && errors.email.message}
                            {...register("email", {
                                required: { value: true, message: 'Email dalna zaruri hai' }, pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "Invalid email address"
                                }
                            })}
                        />

                        <button onClick={handleSubmit(onSubmit)} className='primaryButton w-100'>
                            Request for OTP
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

export default RequestResetPassword