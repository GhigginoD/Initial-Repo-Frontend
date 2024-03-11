import { Card } from "antd";
import { ReactNode } from "react";
import style from "./style.module.scss";

type CardBaseType = {
  children: ReactNode;
};

export const CardBaseComponent = ({ children }: CardBaseType) => {
  return (
    <Card bordered={true} className={style.card}>
      {children}
    </Card>
  );
};
