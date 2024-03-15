import { AssuntoType } from "@/type";
import { Form } from "antd";
import { useEffect } from "react";
import { ButtonComponent } from "../Button/ButtonComponent";
import { DropList, InputText, InputTextArea } from "../Inputs";

type AssuntoFormType = {
  onSubmit: (value: any) => void;
  assunto?: AssuntoType;
};

export const AssuntoFormComponent = ({
  onSubmit,
  assunto,
}: AssuntoFormType) => {
  const data = [{ value: "1", title: "cultura" }];

  const [form] = Form.useForm();
  useEffect(() => {
    form.setFieldValue("categoria", assunto?.categoria);
    form.setFieldValue("nome", assunto?.nome);
    form.setFieldValue("descricao", assunto?.descricao);
    form.setFieldValue("posicionamento", assunto?.posicionamento);
  }, [assunto]);

  return (
    <Form
      wrapperCol={{ span: 32 }}
      layout="vertical"
      style={{ width: "100%", maxWidth: "600px" }}
      onFinish={onSubmit}
      form={form}
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
  );
};
