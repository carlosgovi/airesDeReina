import fs from "fs";
import Slider from "../components/slider/slider";
import Card from "../components/card/card";
import { Montserrat } from "next/font/google";
import style from "../page.module.css";
import Image from "next/image";
import { Libre_Baskerville } from "next/font/google";

import Link from "next/link";

const montserrat = Montserrat({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});
const libreBaskerville = Libre_Baskerville({
  weight: "400",
  subsets: ["latin"],
});
interface jsonData {
  srcImg: string;
  title: string;
  description: [string];
  durationData: string;
}
export default async function Courses() {
  const data = await getdata();

  return (
    <main className={montserrat.className}>
      {/*  CURSOS */}

      <Slider logo="cursos" />
      <div
        style={{ width: "100%", height: "10px", backgroundColor: "#E4D6CE" }}
      ></div>
      <section className={style.wellcome_container}>
        <div className={`${style.wellcome_text}`}>
          <div
            className={`${style.title_text} flex justify-center text-center p-5   `}
          >
            <h3 className={`${libreBaskerville.className} text-xl `}>
              Donde la Moda <br /> Encuentra su Encanto
            </h3>
          </div>
          <div className={style.text}>
            <p className="text-center text-base pl-20 pr-20 ">
              Sumérgete en la elegancia atemporal con Aires de Reina, donde la
              moda se entrelaza con la magia de reinas y cuentos. Más que
              prendas, creamos experiencias únicas. Descubre la exquisitez de
              nuestras telas, la pasión por los detalles y un estilo romántico
              que despierta la curiosidad.
            </p>
          </div>
        </div>
        <div className={style.wellcome_image}>
          <Image
            width={450}
            height={450}
            style={{
              width: 450,
              height: 450,
            }}
            src="/imgDama.png"
            alt="Aires de Reina"
            priority
          ></Image>
        </div>
      </section>
      {/*  CARDS CURSOS */}
      <section className={style.courses_container}>
        <div className={style.courses_container_title}>
          <h2 className={`${libreBaskerville.className} color-black text-xl  `}>
            CURSOS DISPONIBLES
          </h2>
          <div
            style={{ width: "100%", height: "1px", backgroundColor: "#C7B876" }}
          ></div>
          <h4
            className={`${montserrat.className} ${style.courses_title} text-xl  `}
          >
            ENCUENTRA TU CAMINO
          </h4>
        </div>
        <div className={style.card_container}>
          {data?.props.jsonData.map((data: jsonData, index: any) => (
            <Card key={index} {...data} />
          ))}
        </div>
      </section>
      {/*  CARDS INDUMENTARIA */}
      {/*  <section className={style.indumentari_container}>
        <div className={"flex justify-center items-center flex-col p-5"}>
          <h2 className={`${libreBaskerville.className} color-black text-xl  `}>
            INDUMENTARIA
          </h2>

          <div
            style={{
              width: "50%",
              height: "1px",
              backgroundColor: "#C7B876",
            }}
          ></div>
          <h4
            className={`${montserrat.className} ${style.courses_title} text-l text-center  `}
          >
            ENCUENTRA TU AIRE DE REINA
          </h4>
        </div>
        <div className={style.container_cards_indumentari}>
          <div className={style.card_indumentari}>
            <div
              className={`${style.card_indumentari_image} `}
              style={{ backgroundImage: `url(/imgIndumentari/novia.jpg)` }}
            ></div>
            <div className={style.card_indumentari_conteiner_title_button}>
              <div
                className={`${libreBaskerville.className} ${style.card_indumentari_title} text-2xl `}
              >
                <h2>NOVIAS</h2>
              </div>
              <div
                style={{
                  width: "100%",
                  height: "1px",
                  backgroundColor: "#C7B876",
                }}
              ></div>
              <div className={style.card_indumentari_button}>
                <Link href="/indumentaria">
                  <button type="button">VER MÁS</button>
                </Link>
              </div>
            </div>
          </div>

          <div className={style.card_indumentari}>
            <div
              className={`${style.card_indumentari_image} `}
              style={{ backgroundImage: `url(/imgIndumentari/quince.jpg)` }}
            ></div>
            <div className={style.card_indumentari_conteiner_title_button}>
              <div
                className={`${libreBaskerville.className} ${style.card_indumentari_title} text-2xl text-center`}
              >
                <h2>QUINCEAÑOS</h2>
              </div>
              <div
                style={{
                  width: "100%",
                  height: "1px",
                  backgroundColor: "#C7B876",
                }}
              ></div>
              <div className={style.card_indumentari_button}>
                <Link href="/indumentaria">
                  <button type="button">VER MÁS</button>
                </Link>
              </div>
            </div>
          </div>
          <div className={style.card_indumentari}>
            <div
              className={`${style.card_indumentari_image} `}
              style={{ backgroundImage: `url(/imgIndumentari/pretaPorte.jpg)` }}
            ></div>
            <div className={style.card_indumentari_conteiner_title_button}>
              <div
                className={`${libreBaskerville.className} ${style.card_indumentari_title} text-2xl `}
              >
                <h2>PRET-A-PORTE</h2>
              </div>
              <div
                style={{
                  width: "100%",
                  height: "1px",
                  backgroundColor: "#C7B876",
                }}
              ></div>
              <div className={style.card_indumentari_button}>
                <Link href="/indumentaria">
                  <button type="button">VER MÁS</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </main>
  );
}
//get data JSON for Cards Cursos
async function getdata() {
  const filePath = "public/dataCursos.json";
  const jsonData = JSON.parse(fs.readFileSync(filePath, "utf-8"));

  return {
    props: {
      jsonData,
    },
  };
}
