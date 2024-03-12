"use client";
import { ButtonComponent } from "@/@components/Button/ButtonComponent";
import { DropList, InputText, InputTextArea } from "@/@components/Inputs";
import { Divider, Form, FormProps, Row } from "antd";
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
  const data = [{ value: "1", title: "cultura" }];
  return (
    <div className={style.containerForm}>
      <Divider orientation="center">Cadastro de Assuntos</Divider>

      <Row gutter={[16, 16]} justify={"center"}>
        <Form
          wrapperCol={{ span: 32 }}
          layout="vertical"
          style={{ width: "100%", maxWidth: "600px" }}
          onFinish={onFinish}
        >
          <DropList
            label="Categoria"
            name="categoria"
            options={data}
            rules={[{ required: true, message: "Campo Obrigatório" }]}
          />

          <InputText
            label="Nome"
            name="nome"
            rules={[{ required: true, message: "Campo Obrigatório" }]}
          />
          <InputTextArea
            label="Descricao"
            name="descricao"
            rules={[{ required: true, message: "Campo Obrigatório" }]}
          />

          <InputTextArea
            label="Posicionamento"
            name="posicionamento"
            rules={[{ required: true, message: "Campo Obrigatório" }]}
          />
          <ButtonComponent type="default" title="Salvar" />
        </Form>
      </Row>
    </div>
  );
}
