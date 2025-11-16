import type { ReactNode } from "react";

import Footer from "./footer/footer";
import Header from "./header/header";

interface LayoutProps {
  darkHeader: boolean;
  children: ReactNode;
}

const Layout = ({ children, darkHeader }: LayoutProps) => {
  return (
    <>
      <Header darkMode={darkHeader} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
