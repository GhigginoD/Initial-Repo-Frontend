import { fetchAllTemas } from "@/services/tema";
import { AssuntoType } from "@/type";
import { Form } from "antd";
import { useEffect, useState } from "react";
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
  const [temaOptions, setTemaOptions] = useState([]);
  const [form] = Form.useForm();

  async function fetchTemas() {
    try {
      const temas = await fetchAllTemas();

      setTemaOptions(
        temas.map((tema: any) => {
          return { value: tema.id, title: tema.name };
        })
      );
    } catch (error) {
      console.error("Error:", error);
    }
  }

  useEffect(() => {
    fetchTemas();
  }, []);

  useEffect(() => {
    console.log(assunto);
    form.setFieldValue("categoria", {
      value: assunto?.Category.id,
      title: assunto?.Category.name,
    });
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
        options={temaOptions}
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
