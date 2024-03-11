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
      <Layout>
        <Sidebar />
        <div className={style.container}>
          <ContentComponent>{children}</ContentComponent>
        </div>
      </Layout>
      <FooterComponent />
    </Layout>
  );
};
