import { CardBaseComponent } from "@/@components/CardBase/CardBaseComponent";
import { Divider, Row } from "antd";
import style from "./page.module.scss";

export default function Home() {
  return (
    <>
      <Divider orientation="left">Gerenciar</Divider>
      <Row
        justify={"start"}
        gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
        style={{ gap: "2rem" }}
      >
        <CardBaseComponent>
          <span> Content</span>
        </CardBaseComponent>

        <CardBaseComponent>
          <span> Content</span>
        </CardBaseComponent>
      </Row>

      <Divider orientation="left">Dados Gerais</Divider>
      <div className={style.dadosGerais}></div>
    </>
  );
}
