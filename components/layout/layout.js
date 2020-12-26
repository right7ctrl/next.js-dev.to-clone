import React from "react";
import Header from "../header";
function Layout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <footer>Footer</footer>
    </div>
  );
}

export default Layout;
