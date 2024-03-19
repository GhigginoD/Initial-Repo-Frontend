"use client";
import { TemaFormComponent } from "@/@components/Form/TemaFormComponent";
import MessageComponent from "@/@components/Message/MessageComponent";
import { createTheme } from "@/services/tema";
import { Divider, FormProps, Row } from "antd";
import style from "./style.module.scss";

type FieldType = {
  id?: string;
  name?: string;
  descripion?: string;
};

export default function NovosTemas() {
  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    createTheme(values)
      .then(() => {
        MessageComponent({
          type: "success",
          title: "Tema criado com sucesso",
          description: "Esta é uma mensagem de sucesso.",
        });
      })
      .catch(() => {
        MessageComponent({
          type: "error",
          title: "Tema não criado",
          description: "Esta é uma mensagem de error.",
        });
      });
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
