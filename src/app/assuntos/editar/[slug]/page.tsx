"use client";

import { AssuntoFormComponent } from "@/@components/Form/AssuntoFormcomponent";
import MessageComponent from "@/@components/Message/MessageComponent";
import { editSubject, fetchAssuntoBySlug } from "@/services/assunto";
import { AssuntoType } from "@/type";
import { Divider, Row } from "antd";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import style from "../../novo/style.module.scss";

export default function EditTema() {
  const [assunto, setAssunto] = useState<AssuntoType>();
  const { slug } = useParams();

  function onSubmit(values: any) {
    console.log("ok", values);
    const data = {
      categoryId: values.categoria.value || values.categoria,
      description: values.descricao,
      posicionamento: values.posicionamento,
      name: values.nome,
    };
    editSubject(String(assunto?.id), data)
      .then(() => {
        MessageComponent({
          type: "success",
          title: "Tema editado com sucesso!",
          description: "Esta é uma mensagem de sucesso.",
        });
      })
      .catch(() => {
        MessageComponent({
          type: "error",
          title: "Tema não editado!",
          description: "Esta é uma mensagem de error.",
        });
      });
  }

  async function fetchAllTemas(slugName: string | string[]) {
    const assunto = await fetchAssuntoBySlug(slugName);
    setAssunto({
      id: assunto.id,
      nome: assunto.name,
      slug: assunto.slug,
      descricao: assunto.description,
      Category: { name: assunto.Category.name, id: assunto.Category.id },
      posicionamento: assunto.posicionamento,
    });
  }

  useEffect(() => {
    if (slug) fetchAllTemas(slug);
  }, [slug]);

  return (
    <div className={style.containerForm}>
      <Divider orientation="center">Edição de Temas</Divider>

      <Row gutter={[16, 16]} justify={"center"}>
        <AssuntoFormComponent onSubmit={onSubmit} assunto={assunto} />
      </Row>
    </div>
  );
}
