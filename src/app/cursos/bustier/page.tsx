import React from "react";
import Image from "next/image";
import CardCourse from "@/app/components/cardCourse/cardCourse";
import style from "./bustier.module.css";
import { Libre_Baskerville } from "next/font/google";
const libreBaskerville = Libre_Baskerville({
  weight: "400",
  subsets: ["latin"],
});
const Bustier = () => {
  return (
    <div>
      <div
        style={{
          width: "100%",
          height: "100vh",
          backgroundImage: `url(/cursos/imgCursoBustier.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div
        style={{ width: "100%", height: "10px", backgroundColor: "#E4D6CE" }}
      ></div>

      <CardCourse
        title="Bustier"
        text="Éste curso es una fusión entre los conocimientos adquiridos para realizar lencería y las técnicas aplicadas en la corseteria. La combinación de materiales y la aplicación de dichas técnicas se unifican y se logra materializar una pieza moderna, muy delicada, exacta y única."
        clases={6}
        horas={3.5}
      />
      <section className={style.container_description_course}>
        <div className={style.container_description_img}>
          <Image
            src="/cursos/imgCursoBustier2.jpg"
            alt="Aires de Reina"
            width={450}
            height={450}
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
              Bustier
            </h5>

            <ul>
              <ul>
                <li>
                  <h5>Clase 1:</h5>
                  <ul style={{ listStyle: "disc" }}>
                    <li>Toma de medidas.</li>
                    <li>Reconocimiento de tejidos de punto y plano.</li>
                    <li>
                      Variedad de tules y el material del momento, el bondeado
                      para materializar la taza del corpiño.
                    </li>
                    <li>
                      Comenzamos la moldería realizando el corpiño base con
                      pinzas en talle 44 y también se personaliza y se puede
                      confeccionar a medida.
                    </li>
                  </ul>
                </li>
                <li>
                  <h5>Clase 2:</h5>
                  <ul style={{ listStyle: "disc" }}>
                    <li>
                      Seguimos con el trazado del corpiño base, transformación a
                      corset base y continuamos con el patrón para finalizar y
                      lograr la moldería del bustier.
                    </li>
                    <li>Se explica la función y el manejo de las pinzas.</li>
                  </ul>
                </li>
                <li>
                  <h5>Clase 3:</h5>
                  <ul style={{ listStyle: "disc" }}>
                    <li>
                      Control de la moldería y comenzamos a materializar cada
                      pieza en los materiales elegidos.
                    </li>
                    <li>Tazas en bondeado.</li>
                  </ul>
                </li>
                <li>
                  <h5>Clase 4:</h5>
                  <ul style={{ listStyle: "disc" }}>
                    <li>
                      Armado del cuerpo dependiendo de las variantes de modelos
                      y telas elegidas.
                    </li>
                    <li>Canales para pasar las ballenas.</li>
                    <li>Bieses.</li>
                  </ul>
                </li>
                <li>
                  <h5>Clase 5:</h5>
                  <ul style={{ listStyle: "disc" }}>
                    <li>
                      Armado de tazas forradas para ubicar y unir al cuerpo.
                    </li>
                    <li>Colocación de cinta vaina y aro.</li>
                    <li>Terminación de escote.</li>
                    <li>Diferentes formas de terminaciones.</li>
                  </ul>
                </li>
                <li>
                  <h5>Clase 6:</h5>
                  <ul style={{ listStyle: "disc" }}>
                    <li>Cerramiento en espalda.</li>
                    <li>Terminaciones con ojalillos del mismo material.</li>
                    <li>
                      También se termina con cierre y doble ballena para una
                      mejor estructura.
                    </li>
                    <li>Detalles con terminaciones a mano.</li>
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

export default Bustier;
