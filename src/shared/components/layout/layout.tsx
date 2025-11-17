import type { ReactNode, Ref } from "react";

import Footer from "./footer/footer";
import Header from "./header/header";

interface LayoutProps {
  darkHeader: boolean;
  children: ReactNode;
  footerRef?: Ref<HTMLDivElement>;
}

const Layout = ({ children, darkHeader, footerRef }: LayoutProps) => {
  return (
    <>
      <Header darkMode={darkHeader} />
      {children}
      <Footer ref={footerRef} />
    </>
  );
};

export default Layout;
