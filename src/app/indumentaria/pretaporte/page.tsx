import React from "react";
import Image from "next/image";
import CardCourse from "@/app/components/cardCourse/cardCourse";
import style from "./pretaporte.module.css";
import { Libre_Baskerville } from "next/font/google";
const libreBaskerville = Libre_Baskerville({
  weight: "400",
  subsets: ["latin"],
});
const Pretaporte = () => {
  return (
    <div className={style.container}>
      <div
        style={{
          width: "100%",
          height: "100vh",
          backgroundImage: `url(/imgIndumentari/pretaPorte.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div
        style={{ width: "100%", height: "10px", backgroundColor: "#E4D6CE" }}
      ></div>

      <CardCourse
        title="PRET-A-PORTE"
        text="Encuentra el vestido ideal para destacar en tu ocasión especial, desde estilos atemporales y refinados hasta propuestas modernas y audaces."
        clases={12}
        horas={2}
        tipe="indumentary"
      />
      <section className={style.container_description_course}>
  <div className={style.container_description_img}>
    <Image
      src="/imgIndumentari/pretaPorteIndumentari.jpg"
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
        VESTIDOS PRÊT-À-PORTER
      </h5>
      <ul>
        <li>
          <h5>1. Selección de Estilo:</h5>
          <ul style={{ listStyle: "disc" }}>
            <li>Amplia gama de diseños preelaborados, listos para llevar.</li>
            <li>Opciones que combinan lo moderno con el romanticismo clásico.</li>
          </ul>
        </li>
        <li>
          <h5>2. Calidad en Materiales:</h5>
          <ul style={{ listStyle: "disc" }}>
            <li>Uso de telas elegantes y versátiles que garantizan comodidad.</li>
            <li>Selección de encajes, bordados y detalles únicos.</li>
          </ul>
        </li>
        <li>
          <h5>3. Ajustes Personalizados:</h5>
          <ul style={{ listStyle: "disc" }}>
            <li>Ajustes rápidos para adaptarse a la figura de la clienta.</li>
            <li>Detalles menores adaptables según preferencia y comodidad.</li>
          </ul>
        </li>
        <li>
          <h5>4. Proceso de Prueba:</h5>
          <ul style={{ listStyle: "disc" }}>
            <li>Prueba en tienda para asegurar que el ajuste sea perfecto.</li>
            <li>Opciones de ajuste final para máxima satisfacción.</li>
          </ul>
        </li>
        <li>
          <h5>5. Entrega Inmediata:</h5>
          <ul style={{ listStyle: "disc" }}>
            <li>Vestidos listos para llevar en un tiempo mínimo.</li>
            <li>Ideal para quienes buscan una opción elegante y rápida.</li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</section>

    </div>
  );
};

export default Pretaporte;
