"use client";
import { ButtonComponent } from "@/@components/Button/ButtonComponent";
import { CardBaseComponent } from "@/@components/CardBase/CardBaseComponent";
import { EditPencilComponent } from "@/@components/Icons/EditOutlined";
import { SearchIcon } from "@/@components/Icons/searchIcon";
import { InputText } from "@/@components/Inputs";
import { fetchAllAssuntos } from "@/services/assunto";
import { AssuntoType } from "@/type";
import { limitText } from "@/utils";
import { Divider, Form, FormProps } from "antd";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import style from "./style.module.scss";

type FieldType = {
  nomeCategory: string;
  nomeAssunto: string;
};

export default function VisualizarAssuntos() {
  const [assuntos, setAssuntos] = useState<AssuntoType[] | []>([]);
  const [form] = Form.useForm();
  const { push } = useRouter();
  const tamanhoLargura =
    typeof window !== "undefined" ? window.innerWidth : undefined;

  function handlerRedirect(route: string) {
    push(route);
  }
  const onSubmit: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
  };
  async function handleFetchSubjects() {
    try {
      const assuntos = await fetchAllAssuntos();
      setAssuntos(assuntos);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  useEffect(() => {
    handleFetchSubjects();
  }, []);

  return (
    <>
      <div className={style.containerForm}>
        <Divider orientation="center">Busca Avançada</Divider>
        <Form
          layout={
            tamanhoLargura && tamanhoLargura >= 850 ? "inline" : "vertical"
          }
          wrapperCol={{ span: 14 }}
          style={{ rowGap: "1rem" }}
          onFinish={onSubmit}
          form={form}
        >
          <InputText label="Nome do Assunto" name="nomeAssunto" />
          <InputText label="Nome da Categoria" name="nomeCategoria" />

          <ButtonComponent
            type="primary"
            title="Buscar"
            icon={<SearchIcon />}
          />
        </Form>
        <Divider orientation="center">Assuntos Encontrados</Divider>
        <div className={style.gridContainerCards}>
          {assuntos?.map((tema: any, index: number) => {
            return (
              <CardBaseComponent key={index}>
                <div className={style.contentCard}>
                  <b>
                    {tema.name} - ({tema.Category?.name})
                  </b>
                  <p>{tema.description ? limitText(tema.description) : ""}</p>
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "flex-end",
                    }}
                  >
                    <EditPencilComponent
                      className={style.iconPencil}
                      onclick={() => handlerRedirect(`editar/${tema.slug}`)}
                    />
                  </div>
                </div>
              </CardBaseComponent>
            );
          })}
        </div>
      </div>
    </>
  );
}
