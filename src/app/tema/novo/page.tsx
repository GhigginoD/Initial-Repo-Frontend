"use client";
import { TemaFormComponent } from "@/@components/Form/TemaFormComponent";
import { Divider, FormProps, Row } from "antd";
import style from "./style.module.scss";

type FieldType = {
  id?: string;
  nome?: string;
  descricao?: string;
};

export default function NovosTemas() {
  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
  };

  return (
    <div className={style.containerForm}>
      <Divider orientation="center">Cadastro de Temas</Divider>

      <Row gutter={[16, 16]} justify={"center"}>
        <TemaFormComponent onSubmit={onFinish} />
      </Row>
    </div>
  );
}
