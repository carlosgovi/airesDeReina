import React from "react";
import Image from "next/image";
import CardCourse from "@/app/components/cardCourse/cardCourse";
import style from "./corseteria.module.css";
import { Libre_Baskerville } from "next/font/google";
const libreBaskerville = Libre_Baskerville({
  weight: "400",
  subsets: ["latin"],
});
const Corseteria = () => {
  return (
    <div>
      <div
        style={{
          width: "100%",
          height: "100vh",
          backgroundImage: `url(/cursos/imgCursoCorseteria.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div
        style={{ width: "100%", height: "10px", backgroundColor: "#E4D6CE" }}
      ></div>

      <CardCourse
        title="Corseteria"
        text="El curso de corseteria está orientado para alumnos que tengan la capacidad y el compromiso de aprender a realizar piezas como verdaderas obras de arte. Aprenderán desde cero a realizar prendas sofisticadas con diferentes grados de complejidad.
Excelencia, es la palabra que caracteriza éste curso."
        clases={12}
        horas={2}
      />
      <section className={style.container_description_course}>
        <div className={style.container_description_img}>
          <Image
            src="/cursos/imgCursoCorseteria2.jpg"
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
              CORSETERIA
            </h5>

            <ul>
              <ul>
                <li>
                  <h5>Clase 1:</h5>
                  <ul style={{ listStyle: "disc" }}>
                    <li>Presentación.</li>
                    <li>Historia del corsé.</li>
                    <li>Materiales textiles.</li>
                    <li>Toma de medidas.</li>
                  </ul>
                </li>
                <li>
                  <h5>Clase 2:</h5>
                  <ul style={{ listStyle: "disc" }}>
                    <li>Moldería del corpiño base con pinzas.</li>
                    <li>Transformación a corsé base.</li>
                  </ul>
                </li>
                <li>
                  <h5>Clase 3:</h5>
                  <ul style={{ listStyle: "disc" }}>
                    <li>Comienzo del armado del corsé.</li>
                    <li>Diferentes modelos.</li>
                  </ul>
                </li>
                <li>
                  <h5>Clase 4:</h5>
                  <ul style={{ listStyle: "disc" }}>
                    <li>Unión de las piezas.</li>
                    <li>Hilvanes y costuras a máquina.</li>
                    <li>Canal para las ballenas.</li>
                  </ul>
                </li>
                <li>
                  <h5>Clase 5:</h5>
                  <ul style={{ listStyle: "disc" }}>
                    <li>
                      Colocación del cierre con terminaciones de alta costura.
                    </li>
                    <li>Armado de la forrería.</li>
                    <li>Tips y detalles de terminaciones a mano.</li>
                  </ul>
                </li>
                <li>
                  <h5>Clase 6:</h5>
                  <ul style={{ listStyle: "disc" }}>
                    <li>Ejercicios de moldería para lograr nuevos diseños.</li>
                    <li>
                      Cerramiento de la forrería con terminaciones a mano.
                    </li>
                  </ul>
                </li>
                <li>
                  <h5>Clase 7:</h5>
                  <ul style={{ listStyle: "disc" }}>
                    <li>
                      Trabajo con diferentes materiales textiles como tules
                      bordados, encajes, etc.
                    </li>
                    <li>Recorte, encastre y bordado a mano.</li>
                  </ul>
                </li>
                <li>
                  <h5>Clase 8:</h5>
                  <ul style={{ listStyle: "disc" }}>
                    <li>Bustier.</li>
                    <li>Corsé con taza.</li>
                    <li>Materiales a utilizar.</li>
                    <li>Bondeado, tules, ballenas, cintas y más.</li>
                    <li>
                      Comienzo de la transformación desde la base del corsé a
                      Bustier.
                    </li>
                  </ul>
                </li>
                <li>
                  <h5>Clase 9:</h5>
                  <ul style={{ listStyle: "disc" }}>
                    <li>Trabajo de pinzas para armar las tazas.</li>
                    <li>Práctica con diferentes radios de mama.</li>
                    <li>Armado en el bondeado.</li>
                    <li>Armado del cuerpo con transparencia.</li>
                  </ul>
                </li>
                <li>
                  <h5>Clase 10:</h5>
                  <ul style={{ listStyle: "disc" }}>
                    <li>
                      Diferentes maneras de coser las cintas para pasar las
                      ballenas.
                    </li>
                    <li>Terminaciones diversas.</li>
                  </ul>
                </li>
                <li>
                  <h5>Clase 11:</h5>
                  <ul style={{ listStyle: "disc" }}>
                    <li>Unión de las tazas al cuerpo del bustier.</li>
                    <li>Diferentes cerramientos.</li>
                    <li>Cierres, cintas, ojalillos.</li>
                  </ul>
                </li>
                <li>
                  <h5>Clase 12:</h5>
                  <ul style={{ listStyle: "disc" }}>
                    <li>Finalización del armado.</li>
                  </ul>
                </li>
                <li>
                  <h5>Clase 13:</h5>
                  <ul style={{ listStyle: "disc" }}>
                    <li>Moldería de una falda sirena.</li>
                    <li>Diferentes modelos.</li>
                    <li>Cálculo de metros de cantidad de tela.</li>
                  </ul>
                </li>
                <li>
                  <h5>Clase 14:</h5>
                  <ul style={{ listStyle: "disc" }}>
                    <li>Armado de la falda.</li>
                    <li>Tizada.</li>
                  </ul>
                </li>
                <li>
                  <h5>Clase 15:</h5>
                  <ul style={{ listStyle: "disc" }}>
                    <li>Proceso de armado de la falda.</li>
                    <li>
                      Colocación de cierre y explicación para unirla a la
                      cintura.
                    </li>
                  </ul>
                </li>
                <li>
                  <h5>Clase 16:</h5>
                  <ul style={{ listStyle: "disc" }}>
                    <li>Diferentes terminaciones de ruedo.</li>
                    <li>Ruloté a mano y a máquina.</li>
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

export default Corseteria;
