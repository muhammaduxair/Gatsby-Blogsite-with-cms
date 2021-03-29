import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import * as styles from "./layout.module.scss";

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <div>
        <Header />
        {children}
      </div>
      <Footer />
    </div>
  );
};
export default Layout;
