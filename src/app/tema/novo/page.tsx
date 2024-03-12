"use client";
import { ButtonComponent } from "@/@components/Button/ButtonComponent";
import { InputText, InputTextArea } from "@/@components/Inputs";
import { Divider, Form, FormProps, Row } from "antd";
import style from "./style.module.scss";
type FieldType = {
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
        <Form
          wrapperCol={{ span: 32 }}
          layout="vertical"
          style={{ width: "100%", maxWidth: "600px" }}
          onFinish={onFinish}
        >
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
          <ButtonComponent type="default" title="Salvar" />
        </Form>
      </Row>
    </div>
  );
}
