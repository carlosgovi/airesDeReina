import fs from "fs";
import Slider from "./components/slider/slider";

import { Montserrat } from "next/font/google";
import style from "./page.module.css";
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
export default async function Home() {
  const data = await getdata();

  return (
    <main className={montserrat.className}>
      {/*  WELLCOME */}

      <Slider logo="indumentaria" />
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
      <section className={style.container_card_Links}>
 
        <div className={style.card_image_link}>
          <Link href="/indumentaria">
         
          <Image src="/imgIndumentari/homeImgIndumentary.jpg" alt="" width={700} height={700} />
      
          <span className={`${libreBaskerville.className} ${style.card_image_link_text} `}> Indumentaria</span>
          </Link>
        </div>
        <div className={style.card_image_link}>
          <Link href="/cursos">
         
            <Image src="/cursos/homeImgCourse.jpg" alt="" width={700} height={700} />
         
          <span className={`${libreBaskerville.className} ${style.card_image_link_text} `}> Cursos</span>
          </Link>
          
        </div>
        
      </section>
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
