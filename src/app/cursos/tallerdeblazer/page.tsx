import React from "react";
import Image from "next/image";
import CardCourse from "@/app/components/cardCourse/cardCourse";
import style from "./blazer.module.css";
import { Libre_Baskerville } from "next/font/google";
const libreBaskerville = Libre_Baskerville({
  weight: "400",
  subsets: ["latin"],
});
const Blazer = () => {
  return (
    <div className={style.container}>
      <div
        style={{
          width: "100%",
          height: "100vh",
          backgroundImage: `url(/cursos/imgCursoBlazer.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div
        style={{ width: "100%", height: "10px", backgroundColor: "#E4D6CE" }}
      ></div>

      <CardCourse
        title="TALLER DE BLAZER"
        text="Durante este taller, adquirirás las habilidades esenciales para desarrollar la moldería base y sus transformaciones, así como los conocimientos fundamentales de costura, ensamblaje, colocación de detalles y acabados, centrándonos en la confección de un elegante blazer."
        clases={12}
        horas={2}
      />
      <section className={style.container_description_course}>
        <div className={style.container_description_img}>
          <Image
            src="/cursos/imgCursoBlazer.jpg"
            alt="Aires de Reina"
            width={650}
            height={650}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>
        <div className={style.container_description_text}>
          <h3
            className={`${libreBaskerville.className} ${style.title_description} `}
          >
            DESCRIPCION
          </h3>
          <div
            style={{
              width: "80%",
              height: "1px",
              backgroundColor: "#C7B876",
            }}
          ></div>
          <div className={style.container_text}>
            <h5 className={`${libreBaskerville.className} ${style.title} `}>
              TALLER DE BLAZER
            </h5>
            <ul>
              <ul>
                <li>
                  <h5>1. Introducción y Medidas:</h5>
                  <ul style={{ listStyle: "disc" }}>
                    <li>Presentación del curso.</li>
                    <li>Materiales y medidas.</li>
                    <li>Corpiño base delantero y espalda.</li>
                  </ul>
                </li>
              </ul>

              <ul>
                <li>
                  <h5>2. Transformación y Estilo:</h5>
                  <ul style={{ listStyle: "disc" }}>
                    <li>Transformación del corpiño base.</li>
                    <li>Chaqueta entallada y cuello smoking.</li>
                  </ul>
                </li>
              </ul>

              <ul>
                <li>
                  <h5>3. Detalles de Diseño:</h5>
                  <ul style={{ listStyle: "disc" }}>
                    <li>Cuello solapa y para solapa.</li>
                    <li>Creación de la manga base.</li>
                  </ul>
                </li>
              </ul>

              <ul>
                <li>
                  <h5>4.Manga y Textiles: </h5>
                  <ul style={{ listStyle: "disc" }}>
                    <li>Transformación de manga base.</li>
                    <li>Manga tipo sastre.</li>
                    <li>Elección y uso de textiles.</li>
                  </ul>
                </li>
              </ul>

              <ul>
                <li>
                  <h5>5.Preparación para Confección: </h5>
                  <ul style={{ listStyle: "disc" }}>
                    <li>Plano de corte.</li>
                    <li>Inicio de la confección y entretelado.</li>
                  </ul>
                </li>
              </ul>

              <ul>
                <li>
                  <h5>6. Ensamble Inicial:</h5>
                  <ul style={{ listStyle: "disc" }}>
                    <li>Unión de piezas delanteras y traseras.</li>
                    <li>Unión de hombros y primera prueba.</li>
                  </ul>
                </li>
              </ul>

              <ul>
                <li>
                  <h5>7. Armado de Mangas:</h5>
                  <ul style={{ listStyle: "disc" }}>
                    <li>Unión de manga y bajo manga.</li>
                    <li>Ensamble completo de las mangas.</li>
                  </ul>
                </li>
              </ul>

              <ul>
                <li>
                  <h5>8. Forrería y Ajustes:</h5>
                  <ul style={{ listStyle: "disc" }}>
                    <li>Armado de forrería.</li>
                    <li>Ajustes necesarios en la forrería.</li>
                    <li>Unión de la vista con la forrería.</li>
                  </ul>
                </li>
              </ul>

              <ul>
                <li>
                  <h5>9. Montaje Final: </h5>
                  <ul style={{ listStyle: "disc" }}>
                    <li>Montaje de forrería a tela principal.</li>
                    <li>Armado de cuello.</li>
                    <li>Montaje completo del cuello.</li>
                  </ul>
                </li>
              </ul>

              <ul>
                <li>
                  <h5>10. Finalización y Detalles: </h5>
                  <ul style={{ listStyle: "disc" }}>
                    <li>Terminaciones y ruedos.</li>
                    <li>Proceso final de planchado.</li>
                  </ul>
                </li>
              </ul>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blazer;
