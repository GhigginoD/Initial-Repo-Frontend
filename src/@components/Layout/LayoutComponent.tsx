import { Layout } from "antd";
import { ContentComponent } from "../Content/ContentComponent";
import { FooterComponent } from "../Footer/footerComponent";
import { HeaderComponent } from "../Header/headerComponent";
import style from "./style.module.scss";

export const LayoutComponent = ({ children }: any) => {
  return (
    <Layout className={style.layoutStyle}>
      <HeaderComponent />
      <ContentComponent>{children}</ContentComponent>
      <FooterComponent />
    </Layout>
  );
};
