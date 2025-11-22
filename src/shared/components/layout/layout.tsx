import type { ReactNode, Ref } from "react";

import Footer from "./footer/footer";
import Header from "./header/header";

interface LayoutProps {
  darkHeader?: boolean;
  children: ReactNode;
  footerRef?: Ref<HTMLDivElement>;
}

const Layout = ({ children, darkHeader, footerRef }: LayoutProps) => {
  return (
    <>
      <div style={{ height: "8rem" }}>
        <Header darkMode={darkHeader} />
      </div>
      {children}
      <Footer ref={footerRef} />
    </>
  );
};

export default Layout;
