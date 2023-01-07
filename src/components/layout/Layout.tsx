import { useRouter } from "next/router";
import React from "react";
import SimpleBottomNavigation from "./BottomNavigation";
import Footer from "./Footer";
import Head from "./Head";
import Navigation from "./Navigation";

type Props = {
  children: React.ReactNode;
  exclude?: string[];
};

function Layout({ exclude, children }: Props) {
  const { pathname } = useRouter();

  if (exclude && exclude.includes(pathname)) {
    return (
      <>
        <Head />
        {children}
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navigation />
      {children}
      <SimpleBottomNavigation defaultValue={0} />
    </>
  );
}

export default Layout;
