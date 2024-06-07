import React from "react";
import Image from "next/image";
import CardCourse from "@/app/components/cardCourse/cardCourse";
import style from "./bordado.module.css";
import { Libre_Baskerville } from "next/font/google";
const libreBaskerville = Libre_Baskerville({
  weight: "400",
  subsets: ["latin"],
});
const Bordado = () => {
  return (
    <div>
      <div
        style={{
          width: "100%",
          height: "100vh",
          backgroundImage: `url(/cursos/imgCursoBordado.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div
        style={{ width: "100%", height: "10px", backgroundColor: "#E4D6CE" }}
      ></div>

      <CardCourse
        title="TALLER DE BORDADO"
        text="Bordar disminuye la frecuencia cardíaca, la presión arterial y la tensión muscular. Ayuda dràsticamente a reducir el strés. Bordar se convierte en ese momento de calma diaria que te ayuda a desconectar de los problemas cotidianos .
Aprenderás todos los secretos de ésta técnica milenaria, como decían los romanos 'la pintura con aguja es un arte'."
        clases={16}
        horas={2.5}
      />
      <section className={style.container_description_course}>
        <div className={style.container_description_img}>
          <Image
            src="/cursos/imgCursoBordado2.jpg"
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
              TALLER DE BORDADO
            </h5>

            <p className={style.text}>FALTA DATA</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Bordado;
