import { Header } from "../Layout/LayoutComponent";
import style from "./style.module.scss";

export const HeaderComponent = () => {
  return (
    <Header className={style.headerStyle} title="as">
      <span className={style.textHeader}>
        Sistema Admin - Agenda Institucional
      </span>
    </Header>
  );
};
