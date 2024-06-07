import React from "react";
import Image from "next/image";
import CardCourse from "@/app/components/cardCourse/cardCourse";
import style from "./costurabasica.module.css";
import { Libre_Baskerville } from "next/font/google";
const libreBaskerville = Libre_Baskerville({
  weight: "400",
  subsets: ["latin"],
});
const CosturaBasica = () => {
  return (
    <div>
      <div
        style={{
          width: "100%",
          height: "100vh",
          backgroundImage: `url(/cursos/imgCursoCosturaBasica.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div
        style={{ width: "100%", height: "10px", backgroundColor: "#E4D6CE" }}
      ></div>

      <CardCourse
        title="Costura Basica"
        text="Éste curso está pensado para personas que no tienen conocimientos previos y en el cuál aprenderán técnicas de costura y moldería para crear prendas de alta calidad."
        clases={6}
        horas={2}
      />
      <section className={style.container_description_course}>
        <div className={style.container_description_img}>
          <Image
            src="/cursos/imgCursoCosturaBasica2.jpg"
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
              Costura Basica
            </h5>

            <ul>
              <ul>
                <li>
                  <h5>Clase 1:</h5>
                  <ul style={{ listStyle: "disc" }}>
                    <li>Tabla de talles.</li>
                    <li>Toma de medidas.</li>
                    <li>Reconocimiento de herramientas de trabajo.</li>
                    <li>Materiales textiles.</li>
                  </ul>
                </li>
                <li>
                  <h5>Clase 2:</h5>
                  <ul style={{ listStyle: "disc" }}>
                    <li>Moldería base de Falda.</li>
                    <li>Talle 44 y a medida.</li>
                    <li>Molde en escala.</li>
                    <li>Corte al hilo y al bies.</li>
                  </ul>
                </li>
                <li>
                  <h5>Clase 3:</h5>
                  <ul style={{ listStyle: "disc" }}>
                    <li>
                      Transformaciones partiendo del molde base para realizar
                      otros modelos.
                    </li>
                    <li>Falda recta, tubo, evase.</li>
                  </ul>
                </li>
                <li>
                  <h5>Clase 4:</h5>
                  <ul style={{ listStyle: "disc" }}>
                    <li>Armado de la falda.</li>
                    <li>Diferentes puntadas a mano.</li>
                    <li>Plano de corte, tizada y corte.</li>
                  </ul>
                </li>
                <li>
                  <h5>Clase 5:</h5>
                  <ul style={{ listStyle: "disc" }}>
                    <li>
                      Faldas media campana, acampanada y con diferentes vuelos,
                      quillas, godets.
                    </li>
                  </ul>
                </li>
                <li>
                  <h5>Clase 6:</h5>
                  <ul style={{ listStyle: "disc" }}>
                    <li>
                      Trabajo en máquina familiar y confección de la falda.
                    </li>
                    <li>Puntadas rectas y zigzag.</li>
                  </ul>
                </li>
                <li>
                  <h5>Clase 7:</h5>
                  <ul style={{ listStyle: "disc" }}>
                    <li>
                      Terminaciones, vista interna, pretina, diferentes tipos de
                      cierres.
                    </li>
                  </ul>
                </li>
                <li>
                  <h5>Clase 8:</h5>
                  <ul style={{ listStyle: "disc" }}>
                    <li>Moldería base de tela de punto.</li>
                    <li>
                      Reconocimiento en telas con elasticidades diferentes.
                    </li>
                  </ul>
                </li>
                <li>
                  <h5>Clase 9:</h5>
                  <ul style={{ listStyle: "disc" }}>
                    <li>Armado de una remera.</li>
                    <li>
                      Conocimiento de la función de una máquina remalladora.
                    </li>
                  </ul>
                </li>
                <li>
                  <h5>Clase 10:</h5>
                  <ul style={{ listStyle: "disc" }}>
                    <li>Terminación de la remera.</li>
                  </ul>
                </li>
                <li>
                  <h5>Clase 11:</h5>
                  <ul style={{ listStyle: "disc" }}>
                    <li>Molde base de corpiño con pinzas.</li>
                    <li>Tela plana.</li>
                    <li>Por talle y a medida.</li>
                    <li>
                      Elección de una prenda: Blusa, camisa o un vestido
                      sencillo.
                    </li>
                  </ul>
                </li>
                <li>
                  <h5>Clase 12:</h5>
                  <ul style={{ listStyle: "disc" }}>
                    <li>Transformación del corpiño base al diseño elegido.</li>
                    <li>Manga base.</li>
                  </ul>
                </li>
                <li>
                  <h5>Clase 13:</h5>
                  <ul style={{ listStyle: "disc" }}>
                    <li>
                      Plano de corte, tizada, corte y armado de la prenda.
                    </li>
                  </ul>
                </li>
                <li>
                  <h5>Clase 14:</h5>
                  <ul style={{ listStyle: "disc" }}>
                    <li>Costuras a máquina.</li>
                  </ul>
                </li>
                <li>
                  <h5>Clase 15:</h5>
                  <ul style={{ listStyle: "disc" }}>
                    <li>Diferentes tipos de mangas.</li>
                  </ul>
                </li>
                <li>
                  <h5>Clase 16:</h5>
                  <ul style={{ listStyle: "disc" }}>
                    <li>Final y presentación de los trabajos.</li>
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

export default CosturaBasica;
