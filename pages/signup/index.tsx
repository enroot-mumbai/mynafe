import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import MaterialTextField from "../../src/components/inputs/MUITextField";
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
        <MaterialTextField
          variant="outlined"
          name="email"
          placeholder="Email address"
        />
        <MaterialTextField
          variant="outlined"
          name="password"
          placeholder="Aapka password"
        />
        <MaterialTextField
          variant="outlined"
          name="confirm-password"
          placeholder="Password confirm kare"
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
        <MaterialTextField
          variant="outlined"
          name="phone"
          placeholder="Phone Number"
        />
        <MaterialTextField
          variant="outlined"
          name="password"
          placeholder="Aapka password"
        />
        <MaterialTextField
          variant="outlined"
          name="confirm-password"
          placeholder="Password confirm kare"
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
