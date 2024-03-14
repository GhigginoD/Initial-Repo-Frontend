"use client";
import { Layout } from "antd";
import { ContentComponent } from "../Content/ContentComponent";
import { FooterComponent } from "../Footer/footerComponent";
import { HeaderComponent } from "../Header/headerComponent";
import { Sidebar } from "../SiderComponent/SiderComponent";
import style from "./style.module.scss";

export const { Header, Footer, Content } = Layout;

export const LayoutComponent = ({ children }: any) => {
  return (
    <Layout className={style.layoutStyle}>
      <HeaderComponent />
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Sidebar />
        <div className={style.container}>
          <ContentComponent>{children}</ContentComponent>
        </div>
      </div>
      <FooterComponent />
    </Layout>
  );
};
