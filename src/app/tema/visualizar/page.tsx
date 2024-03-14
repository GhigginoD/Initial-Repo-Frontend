"use client";
import { ButtonComponent } from "@/@components/Button/ButtonComponent";
import { CardBaseComponent } from "@/@components/CardBase/CardBaseComponent";
import { EditPencilComponent } from "@/@components/Icons/EditOutlined";
import { SearchIcon } from "@/@components/Icons/searchIcon";
import { DropList, InputText } from "@/@components/Inputs";
import { fetchAllTemas } from "@/services/tema";
import { fetchAllUfs } from "@/services/ufs";
import { limitText } from "@/utils";
import { Divider, Form } from "antd";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import style from "./style.module.scss";

export default function VisualizarTemas() {
  const { push } = useRouter();

  const [temas, setTemas] = useState<any>([]);
  const [ufs, setUfs] = useState<any>([]);

  const tamanhoLargura =
    typeof window !== "undefined" ? window.innerWidth : undefined;

  function handlerRedirect(route: string) {
    push(route);
  }

  async function fetchTemas() {
    try {
      const temas = await fetchAllTemas();
      setTemas(temas);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  async function fetchUfs() {
    try {
      const ufs = await fetchAllUfs();
      const ufsOptions = ufs.map((uf: { UF: string; id: string }) => {
        return { value: uf.id, title: uf.UF };
      });
      setUfs(ufsOptions);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  useEffect(() => {
    fetchTemas();
    fetchUfs();
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
        >
          <InputText label="Nome" name="nome" />
          <DropList
            label="Setor"
            name="setores"
            options={[
              { value: "comercio", title: "Comércio" },
              { value: "serviços", title: "Serviços" },
            ]}
          />

          <DropList label="UF" name="categoria" options={ufs} />

          <ButtonComponent
            type="primary"
            title="Buscar"
            icon={<SearchIcon />}
          />
        </Form>

        <Divider orientation="center">Temas Encontrados</Divider>

        <div className={style.gridContainerCards}>
          {temas?.map((tema: any, index: number) => {
            return (
              <CardBaseComponent key={index}>
                <div className={style.contentCard}>
                  <b>{tema.name}</b>
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
