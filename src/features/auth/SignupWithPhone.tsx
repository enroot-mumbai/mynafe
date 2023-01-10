import React from 'react'
import Link from "next/link";
import TextField from '@mui/material/TextField';
import { useForm } from "react-hook-form";
import { userSignup } from '../../utils/api/user';
import { useRouter } from "next/router";

type Props = {}

function SignupWithPhone({ }: Props) {
    const router = useRouter();
    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        defaultValues: {
            phone: '',
            password: '',
            confirmPassword: '',
        }
    });

    const onSubmit = async (data: any) => {
        delete data.confirmPassword;
        const user = await userSignup(data)
        if (user) {
            router.push("/onboarding");
        }
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="d-flex column flex-gap20 mt-20">
                <TextField
                    className='specialInput'
                    id="outlined-basic"
                    label="Phone Number"
                    variant="outlined"
                    helperText={errors.phone && errors.phone.message}
                    {...register("phone", {
                        required: { value: true, message: 'phone dalna zaruri hai' }
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
                <TextField
                    className='specialInput'
                    id="outlined-basic"
                    label="Password confirm kare"
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

                <Link className="max-w-320" href={"/terms"}>
                    By continuing you agree to the{" "}
                    <span className="text-link">Term of Service and Privacy Policy</span>
                </Link>

                <button onClick={handleSubmit(onSubmit)} className="primaryButton w-100">Signup</button>
            </div>
        </form>
    );
}

export default SignupWithPhone