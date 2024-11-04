
import style from "./nosotros.module.css";
import { Libre_Baskerville } from "next/font/google";

const libreBaskerville = Libre_Baskerville({
  weight: "400",
  subsets: ["latin"],
});

const Nosotros = () => {
  return (
    <div className={style.container}>
      {/* Imagen de portada */}
      <div
        style={{
          width: "100%",
          height: "100vh",
          backgroundImage: `url(/nosotros/imgNosotros.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Sección "Sobre Nosotros" */}
      <section className={style.container_description_course}>
        {/*  <div className={style.container_description_img}>
          <Image
            src="/imgIndumentari/noviasIndumentari.jpg"
            alt="Aires de Reina"
            width={350}
            height={350}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div> */}
        <div className={style.container_description_text}>
          <h3 className={`${libreBaskerville.className} ${style.title_description}`}>
            SOBRE NOSOTROS
          </h3>
          <div style={{ width: "80%", height: "2px", backgroundColor: "#C7B876" }}></div>
          <p className={style.text}>
            En <strong>Aires de Reina</strong>, nuestra misión es inspirar y guiar a cada persona en
            su viaje creativo hacia el diseño y la confección de moda. Nos dedicamos a crear
            experiencias de aprendizaje únicas, donde cada detalle y técnica se enseña con
            pasión y precisión, para que nuestros estudiantes puedan convertir sus sueños en
            realidad a través de la moda.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Nosotros;
