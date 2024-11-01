import React from "react";
import Image from "next/image";
import CardCourse from "@/app/components/cardCourse/cardCourse";
import style from "./lenceria.module.css";
import { Libre_Baskerville } from "next/font/google";
const libreBaskerville = Libre_Baskerville({
  weight: "400",
  subsets: ["latin"],
});
const Lenceria = () => {
  return (
    <div>
      <div
        style={{
          width: "100%",
          height: "100vh",
          backgroundImage: `url(/cursos/imgCursoLenceria.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div
        style={{ width: "100%", height: "10px", backgroundColor: "#E4D6CE" }}
      ></div>

      <CardCourse
        title="Lenceria"
        text="En el curso descubrirás técnicas para poder confeccionar de una manera fácil y práctica, diferentes modelos de ropa interior y malla."
        clases={12}
        horas={2}
      />
      <section className={style.container_description_course}>
        <div className={style.container_description_img}>
          <Image
            src="/cursos/imgCursoLenceria2.jpg"
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
              Lenceria
            </h5>

            <ul>
              <ul>
                <li>
                  <h5>Clase 1:</h5>
                  <ul style={{ listStyle: "disc" }}>
                    <li>Charla sobre los materiales a utilizar.</li>
                    <li>Toma de medidas. </li>
                    <li>Tabla de talles.</li>
                    <li>Técnicas para elastizar</li>
                  </ul>
                </li>
              </ul>

              <ul>
                <li>
                  <h5>Clase 2:</h5>
                  <ul style={{ listStyle: "disc" }}>
                    <li>Molderia de diferentes modelos de bombachas.</li>
                  </ul>
                </li>
              </ul>

              <ul>
                <li>
                  <h5>Clase 3:</h5>
                  <ul style={{ listStyle: "disc" }}>
                    <li>
                      Corte delantero de vedettina en puntilla. Elastizado de
                      breteles.
                    </li>
                  </ul>
                </li>
              </ul>
              <ul>
                <li>
                  <h5>Clase 4:</h5>
                  <ul style={{ listStyle: "disc" }}>
                    <li>Trazado de la moldería del corpiño triángulo.</li>
                    <li>Tabla de medidas.</li>
                    <li>Modelos de tazas en bondeado.</li>
                  </ul>
                </li>
              </ul>

              <ul>
                <li>
                  <h5>Clase 5:</h5>
                  <ul style={{ listStyle: "disc" }}>
                    <li> Proceso de armado.</li>
                  </ul>
                </li>
              </ul>

              <ul>
                <li>
                  <h5>Clase 6:</h5>
                  <ul style={{ listStyle: "disc" }}>
                    <li>Práctica con los materiales elastizados.</li>
                  </ul>
                </li>
              </ul>

              <ul>
                <li>
                  <h5>Clase 7:</h5>
                  <ul style={{ listStyle: "disc" }}>
                    <li>Corpiño con arco. Moldería. Diferentes materiales.</li>
                  </ul>
                </li>
              </ul>

              <ul>
                <li>
                  <h5>Clase 8:</h5>
                  <ul style={{ listStyle: "disc" }}>
                    <li>Trazado de las tazas. Recorridos del arco.</li>
                  </ul>
                </li>
              </ul>

              <ul>
                <li>
                  <h5>Clase 9:</h5>
                  <ul style={{ listStyle: "disc" }}>
                    <li>Progresiones de talles.</li>
                  </ul>
                </li>
              </ul>

              <ul>
                <li>
                  <h5>Clase 10:</h5>
                  <ul style={{ listStyle: "disc" }}>
                    <li>Unión de tazas a la cintura. Terminaciones.</li>
                  </ul>
                </li>
              </ul>

              <ul>
                <li>
                  <h5>Clase 11:</h5>
                  <ul style={{ listStyle: "disc" }}>
                    <li>Corte de malla enteriza.</li>
                  </ul>
                </li>
              </ul>

              <ul>
                <li>
                  <h5>Clase 12:</h5>
                  <ul style={{ listStyle: "disc" }}>
                    <li>Terminaciones.</li>
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

export default Lenceria;
