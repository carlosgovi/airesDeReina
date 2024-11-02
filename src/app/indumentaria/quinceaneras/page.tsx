import React from "react";
import Image from "next/image";
import CardCourse from "@/app/components/cardCourse/cardCourse";
import style from "./quinceaneras.module.css";
import { Libre_Baskerville } from "next/font/google";
const libreBaskerville = Libre_Baskerville({
  weight: "400",
  subsets: ["latin"],
});
const Quinceaneras = () => {
  return (
    <div className={style.container}>
      <div
        style={{
          width: "100%",
          height: "100vh",
          backgroundImage: `url(/imgIndumentari/quince.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div
        style={{ width: "100%", height: "10px", backgroundColor: "#E4D6CE" }}
      ></div>

      <CardCourse
        title="QUINCEAÑERAS"
        text="Desde diseños clásicos y elegantes hasta propuestas modernas y atrevidas, encontrarás el vestido perfecto para brillar en tu gran noche."
        clases={12}
        horas={2}
        tipe="indumentary"
      />
     <section className={style.container_description_course}>
  <div className={style.container_description_img}>
    <Image
      src="/imgIndumentari/quinceaneraIndumentari.jpg"
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
        CONFECCIÓN DE VESTIDOS DE QUINCE AÑOS
      </h5>
      <ul>
        <li>
          <h5>1. Primer Encuentro Inspirador:</h5>
          <ul style={{ listStyle: "disc" }}>
            <li>Conversación íntima para conocer los sueños y deseos de la quinceañera.</li>
            <li>Exploración de estilos, colores y detalles románticos o modernos.</li>
          </ul>
        </li>
        <li>
          <h5>2. Toma de Medidas y Elección de Silueta:</h5>
          <ul style={{ listStyle: "disc" }}>
            <li>Mediciones precisas para un ajuste elegante y personalizado.</li>
            <li>Selección de la silueta ideal: princesa, sirena o contemporáneo.</li>
          </ul>
        </li>
        <li>
          <h5>3. Boceto y Diseño:</h5>
          <ul style={{ listStyle: "disc" }}>
            <li>Presentación de un diseño personalizado y único.</li>
            <li>Aprobación final del boceto, reflejando el estilo deseado.</li>
          </ul>
        </li>
        <li>
          <h5>4. Selección de Materiales:</h5>
          <ul style={{ listStyle: "disc" }}>
            <li>Elección de telas, bordados y aplicaciones que aporten magia y elegancia.</li>
            <li>Prueba de combinaciones para reflejar la personalidad de la quinceañera.</li>
          </ul>
        </li>
        <li>
          <h5>5. Confección Inicial:</h5>
          <ul style={{ listStyle: "disc" }}>
            <li>Creación de la base del vestido: corpiño, falda y detalles iniciales.</li>
            <li>Unión de piezas para la primera estructura.</li>
          </ul>
        </li>
        <li>
          <h5>6. Primera Prueba:</h5>
          <ul style={{ listStyle: "disc" }}>
            <li>Ajustes según la retroalimentación de la quinceañera y familia.</li>
            <li>Primer vistazo del vestido en progreso.</li>
          </ul>
        </li>
        <li>
          <h5>7. Detalles Finos y Decoración:</h5>
          <ul style={{ listStyle: "disc" }}>
            <li>Incorporación de encajes, tul, bordados y detalles personalizados.</li>
            <li>Acabados finales en el corpiño y falda para dar vida al diseño.</li>
          </ul>
        </li>
        <li>
          <h5>8. Prueba Final:</h5>
          <ul style={{ listStyle: "disc" }}>
            <li>Verificación de ajuste perfecto y comodidad.</li>
            <li>Confirmación de detalles antes de la entrega.</li>
          </ul>
        </li>
        <li>
          <h5>9. Entrega y Preparación para el Gran Día:</h5>
          <ul style={{ listStyle: "disc" }}>
            <li>Vestido listo para un día inolvidable.</li>
            <li>Instrucciones de cuidado para el gran día.</li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</section>


    </div>
  );
};

export default Quinceaneras;
