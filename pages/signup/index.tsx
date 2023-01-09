import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import MaterialTextField from "../../src/components/inputs/MUITextField";
import BasicTabs from "../../src/components/Tabs";

type Props = {};

function Signup({}: Props) {
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
          placeholder="Your password"
        />
        <MaterialTextField
          variant="outlined"
          name="confirm-password"
          placeholder="Confirm your password"
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
      title: "Email",
      Component: <SignupWithMail />,
    },
    {
      title: "Phone Number",
      Component: <SignupWithPhone />,
    },
  ];

  return (
    <div className="pageContainerCenter">
      <div className="pageContent">
        <h2 className="pageTitle">Signup</h2>
        <BasicTabs tabs={tabs} />
        <span className="divider"></span>
        <Link href={"/login"}>
          Already a user? <span className="text-link">Login here</span>
        </Link>
      </div>
    </div>
  );
}

export default Signup;
