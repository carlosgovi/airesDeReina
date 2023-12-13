import { Header } from "./components/header/header";
import Slider from "./components/slider/slider";
import Card from "./components/card/card";
import { Montserrat } from "next/font/google";
import style from "./page.module.css";
import Image from "next/image";
import { Libre_Baskerville } from "next/font/google";
const montserrat = Montserrat({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});
const libreBaskerville = Libre_Baskerville({
  weight: "400",
  subsets: ["latin"],
});
export default function Home() {
  return (
    <main className={montserrat.className}>
      <Header />
      <Slider />
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
      <section className={style.courses_container}>
        <h2>CURSOS DISPONIBLES</h2>
        <div>------</div>
        <h4>ENCUENTRA TU CAMINO</h4>
        <div>
          <Card />
        </div>
      </section>
    </main>
  );
}
