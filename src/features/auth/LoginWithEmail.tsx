import Link from 'next/link'
import React from 'react'
import TextField from '@mui/material/TextField';
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

type Props = {}

function LoginWithEmail({ }: Props) {
    const router = useRouter();
    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        defaultValues: {
            email: '',
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
                <TextField
                    className='specialInput'
                    id="outlined-basic"
                    label="Aapka password"
                    variant="outlined"
                    helperText={errors.password && errors.password.message}
                    {...register("password", { required: true, minLength: {value: 6, message:'Password mai 6 akshar hone chahiye'} })}
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

export default LoginWithEmail