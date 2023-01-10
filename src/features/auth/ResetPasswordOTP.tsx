import React from 'react'
import TextField from '@mui/material/TextField';
import { useForm } from "react-hook-form";
import { useRouter } from 'next/router';

type Props = {
    setShowOTP: Function;
}

function ResetPasswordOTP({ setShowOTP }: Props) {
    const router = useRouter();
    
    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        defaultValues: {
            otp: '',
        }
    });

    const onSubmit = async (data: any) => {
        router.push('/forgot-password/reset')
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='pageContainerCenter'>
                <div className='pageContent'>
                    <h2 className='pageTitle'>Enter OTP</h2>
                    <div className='d-flex column flex-gap20'>
                        <TextField
                            className='specialInput'
                            id="outlined-basic"
                            label="Enter OTP"
                            variant="outlined"
                            helperText={errors.otp && errors.otp.message}
                            {...register("otp", { required: true })}
                        />

                        <button onClick={handleSubmit(onSubmit)} className='primaryButton w-100'>
                            Submit OTP
                        </button>

                        <button>
                            Didn’t receive OTP? Resend OTP in 29 seconds
                        </button>

                        <span className='divider'></span>

                        <button onClick={() => setShowOTP(false)} className='text-link' >
                            Change email address
                        </button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default ResetPasswordOTP