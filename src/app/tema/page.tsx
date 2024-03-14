"use client";
import { CardBaseComponent } from "@/@components/CardBase/CardBaseComponent";
import { PlusCircleIcon } from "@/@components/Icons/PlusCircleIcon";
import { SearchIcon } from "@/@components/Icons/searchIcon";
import { Divider, Row } from "antd";
import { useRouter } from "next/navigation";
import style from "../page.module.scss";

export default function Temas() {
  const { push } = useRouter();

  function handlerRedirect(route: string) {
    push(route);
  }
  return (
    <>
      <Divider orientation="left">Gerenciar</Divider>
      <Row
        justify={"start"}
        gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
        style={{ gap: "2rem" }}
      >
        <CardBaseComponent onClick={() => handlerRedirect("tema/novo")}>
          <div className={style.contentCard}>
            <PlusCircleIcon className={style.icons} />
            <span className={style.textCard}> Cadastrar Novos Temas</span>
          </div>
        </CardBaseComponent>

        <CardBaseComponent onClick={() => handlerRedirect("tema/visualizar")}>
          <div className={style.contentCard}>
            <SearchIcon className={style.icons} />
            <span className={style.textCard}> Visualizar Temas</span>
          </div>
        </CardBaseComponent>
      </Row>

      <Divider orientation="left">DashBoard Temas</Divider>
      <div className={style.dadosGerais}></div>
    </>
  );
}
