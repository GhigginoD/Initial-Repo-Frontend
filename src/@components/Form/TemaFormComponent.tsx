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
    form.setFieldValue("name", tema?.nome);
    form.setFieldValue("description", tema?.descricao);
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
        label="Nome"
        name="name"
        rules={[{ required: true, message: "Campo Obrigatório" }]}
      />
      <InputTextArea
        label="Descricao"
        name="description"
        rules={[{ required: true, message: "Campo Obrigatório" }]}
      />
      <ButtonComponent type="default" title="Salvar" />
    </Form>
  );
};
