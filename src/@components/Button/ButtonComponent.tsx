import { Button } from "antd";
import React, { FC } from "react";

import { ButtonShape } from "antd/lib/button";
import styles from "./style.module.scss";

export type BtnDTO = {
  loading?: boolean;
  title?: string | React.ReactNode;
  type?: "primary" | "link" | "text" | "default" | "dashed";
  link?: string;
  onClick?: (e: any) => void;
  disabled?: boolean;
  icon?: string;
  shape?: ButtonShape;
};

export const ButtonComponent: FC<BtnDTO> = ({
  loading,
  title,
  type,
  link,
  onClick,
  disabled,
  icon,
  shape,
}) => {
  let className = "";
  switch (type) {
    case "primary":
      className = styles.btn__primary;
      break;
    case "default":
      className = styles.btn__default;
      break;
    case "link":
      className = styles.btn__link;
      break;
    case "text":
      className = styles.btn__text;
      break;
    case "dashed":
      className = styles.btn__dashed;
      break;
  }
  return (
    <Button
      className={className}
      icon={icon ? <i className={`fa-solid ${icon} mr-4`}></i> : null}
      htmlType="submit"
      type={type}
      loading={loading}
      href={link}
      onClick={onClick}
      disabled={disabled}
      shape={shape}
    >
      {loading ? "Carregando..." : title}
    </Button>
  );
};
