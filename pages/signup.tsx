import Link from "next/link";
import React from "react";
import BasicTabs from "../src/components/Tabs";
import SignupWithEmail from "../src/features/auth/SignupWithEmail";
import SignupWithPhone from "../src/features/auth/SignupWithPhone";

type Props = {};

function Signup({ }: Props) {

  const tabs = [
    {
      title: "Phone Number",
      Component: <SignupWithPhone />,
    },
    {
      title: "Email",
      Component: <SignupWithEmail />,
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
