import React from "react";
import Image from "next/image";
import CardCourse from "@/app/components/cardCourse/cardCourse";
import style from "./pantalon.module.css";
import { Libre_Baskerville } from "next/font/google";
const libreBaskerville = Libre_Baskerville({
  weight: "400",
  subsets: ["latin"],
});
const Pantalon = () => {
  return (
    <div className={style.container}>
      <div
        style={{
          width: "100%",
          height: "100vh",
          backgroundImage: `url(/cursos/imgCursoPantalon.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div
        style={{ width: "100%", height: "10px", backgroundColor: "#E4D6CE" }}
      ></div>

      <CardCourse
        title="TALLER DE PANTALON"
        text="El taller te brindará las herramientas necesarias para desarrollar la moldería base y sus transformaciones, las nociones básicas de costura , armado, colocación de cierres y terminaciones."
        clases={12}
        horas={2}
      />
      <section className={style.container_description_course}>
        <div className={style.container_description_img}>
          <Image
            src="/cursos/imgCursoPantalon2.jpg"
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
              TALLER DE PANTALON
            </h5>
            <ul>
              <ul>
                <li>
                  <h5>1. Introducción y Bases:</h5>
                  <ul style={{ listStyle: "disc" }}>
                    <li>Presentación del curso.</li>
                    <li>Materiales y medidas.</li>
                    <li>Creación del pantalón base delantero y espalda.</li>
                  </ul>
                </li>
              </ul>

              <ul>
                <li>
                  <h5>2. Transformaciones Esenciales:</h5>
                  <ul style={{ listStyle: "disc" }}>
                    <li>
                      Transformación a pantalón elastizado delantero y espalda.
                    </li>
                    <li>Materiales y medidas.</li>
                  </ul>
                </li>
              </ul>

              <ul>
                <li>
                  <h5>3. Estilos Específicos y Ajustes:</h5>
                  <ul style={{ listStyle: "disc" }}>
                    <li>Diseño de pantalón tipo jeans.</li>
                    <li>Modificaciones en el tiro y correcciones.</li>
                    <li>Ajustes en el trazado de la pierna.</li>
                  </ul>
                </li>
              </ul>

              <ul>
                <li>
                  <h5>4. Progresión y Armado:</h5>
                  <ul style={{ listStyle: "disc" }}>
                    <li>Progresión y regresión en el diseño.</li>
                    <li>Plano de corte.</li>
                    <li>Armado general del pantalón.</li>
                  </ul>
                </li>
              </ul>

              <ul>
                <li>
                  <h5>5. Detalles del Frente:</h5>
                  <ul style={{ listStyle: "disc" }}>
                    <li>Armado del bolsillo delantero.</li>
                    <li>Colocación del cierre.</li>
                  </ul>
                </li>
              </ul>

              <ul>
                <li>
                  <h5>6. Detalles Traseros y Ensamble:</h5>
                  <ul style={{ listStyle: "disc" }}>
                    <li>Armado del bolsillo trasero si es necesario.</li>
                    <li>Ensamble de la parte delantera con la trasera.</li>
                  </ul>
                </li>
              </ul>

              <ul>
                <li>
                  <h5>7. Cintura y Acabados:</h5>
                  <ul style={{ listStyle: "disc" }}>
                    <li>Entretelado de la cintura y su armado.</li>
                    <li>Armado de pasacintos si es necesario.</li>
                  </ul>
                </li>
              </ul>

              <ul>
                <li>
                  <h5>8. Ensamble Final y Detalles:</h5>
                  <ul style={{ listStyle: "disc" }}>
                    <li>Unión de la cintura.</li>
                    <li>Terminaciones de ruedo.</li>
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

export default Pantalon;
