"use client";

import { TemaFormComponent } from "@/@components/Form/TemaFormComponent";
import { fetchThemeBySlug } from "@/services/tema";
import { TemaType } from "@/type";
import { Divider, Row } from "antd";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import style from "../../novo/style.module.scss";

export default function EditTema() {
  const [tema, setTema] = useState<TemaType>();
  const { slug } = useParams();

  function onSubmit(values: any) {
    console.log("ok", values);
  }

  async function fetchAllTemas(slugName: string | string[]) {
    const tema = await fetchThemeBySlug(slugName);
    setTema({
      id: tema.id,
      nome: tema.name,
      slug: tema.slug,
      descricao: tema.description,
    });
  }

  useEffect(() => {
    if (slug) fetchAllTemas(slug);
  }, [slug]);

  return (
    <div className={style.containerForm}>
      <Divider orientation="center">Cadastro de Temas</Divider>

      <Row gutter={[16, 16]} justify={"center"}>
        <TemaFormComponent onSubmit={onSubmit} tema={tema} />
      </Row>
    </div>
  );
}
