"use client";

import { AssuntoFormComponent } from "@/@components/Form/AssuntoFormcomponent";
import { Divider, FormProps, Row } from "antd";
import style from "./style.module.scss";
type FieldType = {
  categoria?: any;
  nome?: string;
  descricao?: string;
  posicionamento?: string;
};

export default function NovosAssuntos() {
  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
  };

  return (
    <div className={style.containerForm}>
      <Divider orientation="center">Cadastro de Assuntos</Divider>

      <Row gutter={[16, 16]} justify={"center"}>
        <AssuntoFormComponent onSubmit={onFinish} />
      </Row>
    </div>
  );
}
