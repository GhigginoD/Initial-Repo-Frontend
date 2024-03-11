import { Content } from "../Layout/LayoutComponent";
import style from "./style.module.scss";

export const ContentComponent = ({ children }: any) => {
  return <Content className={style.contentStyle}>{children}</Content>;
};
