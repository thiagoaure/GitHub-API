import React from "react";
import Header from "../header";
import Footer from "../footer";
import * as S from "./styled";

const Layout = ({ children }) => {
  return (
    <S.WrapperLayout>
      <Header />
      {children}
      <Footer/>
    </S.WrapperLayout>
  );
};

export default Layout;
