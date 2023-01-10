import Link from 'next/link'
import React from 'react'
import TextField from '@mui/material/TextField';
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

type Props = {}

function LoginWithPhone({ }: Props) {
    const router = useRouter();
    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        defaultValues: {
            phone: '',
            password: '',
        }
    });

    const onSubmit = async (data: any) => {
        console.log('data', data)
        // const user = await userSignup(data)
        // if (user) {
        //     router.push("/");
        // }
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='d-flex column flex-gap20 mt-20'>
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
                <TextField
                    className='specialInput'
                    id="outlined-basic"
                    label="Aapka password"
                    variant="outlined"
                    helperText={errors.password && errors.password.message}
                    {...register("password", { required: true })}
                />
                <Link className='text-link' href={'/forgot-password'}>
                    Forgot Password?
                </Link>
                <button onClick={handleSubmit(onSubmit)} className='primaryButton w-100'>
                    Login
                </button>
            </div>
        </form>
    )
}

export default LoginWithPhone