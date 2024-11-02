import React from "react";
import Image from "next/image";
import CardCourse from "@/app/components/cardCourse/cardCourse";
import style from "./novias.module.css";
import { Libre_Baskerville } from "next/font/google";
const libreBaskerville = Libre_Baskerville({
  weight: "400",
  subsets: ["latin"],
});
const Novias = () => {
  return (
    <div className={style.container}>
      <div
        style={{
          width: "100%",
          height: "100vh",
          backgroundImage: `url(/imgIndumentari/novia.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div
        style={{ width: "100%", height: "10px", backgroundColor: "#E4D6CE" }}
      ></div>

      <CardCourse
        title="Novias"
        text="Sumérgete en un mundo de exquisitas telas seleccionadas con amor, detalles cuidados con pasión y un estilo que despierta la romance."
        clases={12}
        horas={2}
        tipe="indumentary"
      />
      <section className={style.container_description_course}>
  <div className={style.container_description_img}>
    <Image
      src="/imgIndumentari/noviasIndumentari.jpg"
      alt="Aires de Reina"
      width={350}
      height={350}
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  </div>
  <div className={style.container_description_text}>
    <h3
      className={`${libreBaskerville.className} ${style.title_description}`}
    >
      DESCRIPCIÓN
    </h3>
    <div
      style={{
        width: "80%",
        height: "1px",
        backgroundColor: "#C7B876",
      }}
    ></div>
    <div className={style.container_text}>
      <h5 className={`${libreBaskerville.className} ${style.title}`}>
        CONFECCIÓN DE VESTIDOS DE NOVIA
      </h5>
      <ul>
        <li>
          <h5>1. Primera Entrevista:</h5>
          <ul style={{ listStyle: "disc" }}>
            <li>Conocer la visión de la novia y sus expectativas.</li>
            <li>Explorar diseños, telas y detalles deseados.</li>
          </ul>
        </li>
        <li>
          <h5>2. Toma de Medidas:</h5>
          <ul style={{ listStyle: "disc" }}>
            <li>Medidas precisas para asegurar un ajuste perfecto.</li>
            <li>Definir la estructura del vestido.</li>
          </ul>
        </li>
        <li>
          <h5>3. Diseño y Bocetos:</h5>
          <ul style={{ listStyle: "disc" }}>
            <li>Presentación del diseño personalizado a la clienta.</li>
            <li>Aprobación del boceto final.</li>
          </ul>
        </li>
        <li>
          <h5>4. Selección de Materiales:</h5>
          <ul style={{ listStyle: "disc" }}>
            <li>Elección de telas y adornos en base al diseño.</li>
            <li>Prueba de combinaciones y texturas.</li>
          </ul>
        </li>
        <li>
          <h5>5. Confección Inicial:</h5>
          <ul style={{ listStyle: "disc" }}>
            <li>Elaboración del corpiño y falda.</li>
            <li>Unión de las piezas principales.</li>
          </ul>
        </li>
        <li>
          <h5>6. Prueba Intermedia:</h5>
          <ul style={{ listStyle: "disc" }}>
            <li>Ajustes en base a la primera prueba.</li>
            <li>Feedback de la novia para modificaciones.</li>
          </ul>
        </li>
        <li>
          <h5>7. Detalles y Acabados:</h5>
          <ul style={{ listStyle: "disc" }}>
            <li>Aplicación de encajes y bordados.</li>
            <li>Acabados finales en mangas, cuello y bajo.</li>
          </ul>
        </li>
        <li>
          <h5>8. Última Prueba:</h5>
          <ul style={{ listStyle: "disc" }}>
            <li>Ajustes finales y confirmación del ajuste.</li>
            <li>Feedback final antes de la entrega.</li>
          </ul>
        </li>
        <li>
          <h5>9. Entrega Final:</h5>
          <ul style={{ listStyle: "disc" }}>
            <li>Vestido terminado y listo para el gran día.</li>
            <li>Instrucciones de cuidado y recomendaciones.</li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</section>

    </div>
  );
};

export default Novias;
