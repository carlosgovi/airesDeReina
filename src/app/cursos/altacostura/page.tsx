import React from "react";
import Image from "next/image";
import CardCourse from "@/app/components/cardCourse/cardCourse";
import style from "./altacostura.module.css";
import { Libre_Baskerville } from "next/font/google";
const libreBaskerville = Libre_Baskerville({
  weight: "400",
  subsets: ["latin"],
});
const AltaCostura = () => {
  return (
    <div>
      <div
        style={{
          width: "100%",
          height: "100vh",
          backgroundImage: `url(/cursos/imgCursoAltacostura.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div
        style={{ width: "100%", height: "10px", backgroundColor: "#E4D6CE" }}
      ></div>

      <CardCourse
        title="Alta Costura"
        text="FALTA DATA"
        clases={12}
        horas={2}
      />
      <section className={style.container_description_course}>
        <div className={style.container_description_img}>
          <Image
            src="/cursos/imgCursoAltacostura.jpg"
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
              Alta Costura
            </h5>

            <p className={style.text}>FALTA DATA</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AltaCostura;
