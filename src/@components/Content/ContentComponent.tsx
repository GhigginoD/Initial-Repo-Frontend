import { Content } from "antd/es/layout/layout";
import style from "./style.module.scss";
export const ContentComponent = ({ children }: any) => {
  return <Content className={style.contentStyle}>{children}</Content>;
};
