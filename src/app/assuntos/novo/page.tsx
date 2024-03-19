"use client";

import { AssuntoFormComponent } from "@/@components/Form/AssuntoFormcomponent";
import MessageComponent from "@/@components/Message/MessageComponent";
import { createSubject } from "@/services/assunto";
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
    console.log(values);
    const data = {
      categoryId: values.categoria,
      description: values.descricao,
      name: values.nome,
      posicionamento: values.posicionamento,
    };
    createSubject(data)
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
      <Divider orientation="center">Cadastro de Assuntos</Divider>

      <Row gutter={[16, 16]} justify={"center"}>
        <AssuntoFormComponent onSubmit={onFinish} />
      </Row>
    </div>
  );
}
