import { Card } from "antd";
import { ReactNode } from "react";
import style from "./style.module.scss";

type CardBaseType = {
  children: ReactNode;
  onClick: () => void;
};

export const CardBaseComponent = ({ onClick, children }: CardBaseType) => {
  return (
    <Card bordered={true} className={style.card} onClick={onClick}>
      {children}
    </Card>
  );
};
