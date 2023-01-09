import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import TextField from '@mui/material/TextField';
import BasicTabs from "../../src/components/Tabs";

type Props = {};

function Signup({ }: Props) {
  const router = useRouter();

  const SignupWithMail = () => {
    const signupWithMail = () => {
      router.push("/onboarding");
    };
    return (
      <div className="d-flex column flex-gap20 mt-20">
        <TextField
          className='specialInput'
          id="outlined-basic"
          label="Email address"
          variant="outlined"
          name="email"
        />
        <TextField
          className='specialInput'
          id="outlined-basic"
          label="Aapka password"
          variant="outlined"
          name="password"
        />
        <TextField
          className='specialInput'
          id="outlined-basic"
          label="Password confirm kare"
          variant="outlined"
          name="confirm-password"
        />


        <Link className="max-w-320" href={"/terms"}>
          By continuing you agree to the{" "}
          <span className="text-link">Term of Service and Privacy Policy</span>
        </Link>
        <button onClick={signupWithMail} className="primaryButton w-100">
          Signup
        </button>
      </div>
    );
  };

  const SignupWithPhone = () => {
    return (
      <div className="d-flex column flex-gap20 mt-20">
        <TextField
          className='specialInput'
          id="outlined-basic"
          label="Phone Number"
          variant="outlined"
          name="phone"
        />
        <TextField
          className='specialInput'
          id="outlined-basic"
          label="Aapka password"
          variant="outlined"
          name="password"
        />
        <TextField
          className='specialInput'
          id="outlined-basic"
          label="Password confirm kare"
          variant="outlined"
          name="confirm-password"
        />


        <Link className="max-w-320" href={"/terms"}>
          By continuing you agree to the{" "}
          <span className="text-link">Term of Service and Privacy Policy</span>
        </Link>

        <button className="primaryButton w-100">Signup</button>
      </div>
    );
  };

  const tabs = [
    {
      title: "Phone Number",
      Component: <SignupWithPhone />,
    },
    {
      title: "Email",
      Component: <SignupWithMail />,
    },
  ];

  return (
    <div className="pageContainerCenter">
      <div className="pageContent">
        <h2 className="pageTitle center">Register kare</h2>
        <BasicTabs tabs={tabs} />
        <span className="divider"></span>
        <Link href={"/login"}>
          <span className="text-link w-100">Agar aapne pehle is app ka istemal kia hai, toh yahase Login kare</span>
        </Link>
      </div>
    </div>
  );
}

export default Signup;
