import { TemaType } from "@/type/index";
import { Form } from "antd";
import { useEffect } from "react";
import { ButtonComponent } from "../Button/ButtonComponent";
import { InputText, InputTextArea } from "../Inputs";

type TemaFormType = {
  onSubmit: (values: any) => void;
  tema?: TemaType;
};

export const TemaFormComponent = ({ onSubmit, tema }: TemaFormType) => {
  const [form] = Form.useForm();
  useEffect(() => {
    form.setFieldValue("slug", tema?.slug);
    form.setFieldValue("nome", tema?.nome);
    form.setFieldValue("descricao", tema?.descricao);
  }, [tema]);

  return (
    <Form
      form={form}
      wrapperCol={{ span: 32 }}
      layout="vertical"
      style={{ width: "100%", maxWidth: "600px" }}
      onFinish={onSubmit}
    >
      <InputText
        label="slug"
        name="slug"
        disabled={true}
        style={{ display: "none" }}
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
      <ButtonComponent type="default" title="Salvar" />
    </Form>
  );
};
