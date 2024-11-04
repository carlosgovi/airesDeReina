import style from "./blog.module.css";
import Image from "next/image";
import { Libre_Baskerville } from "next/font/google";

const libreBaskerville = Libre_Baskerville({
  weight: "400",
  subsets: ["latin"],
});

const Blog = () => {
  return (
    <div className={style.container}>
      {/* Imagen de portada */}
      <div
        style={{
          backgroundImage: `url(/blog/blogCover.png)`,
        }}
        className={style.imageCover}      ></div>

      {/* Sección "BLOG" */}
      <section className={style.container_description_course}>
        <div className={style.container_description_text}>
          <h3 className={`${libreBaskerville.className} ${style.title_description}`}>
            EL BLOG
          </h3>
          <div style={{ width: "80%", height: "2px", backgroundColor: "#C7B876" }}></div>
          <p className={style.text}>
            Aquí encontrarás los mejores trucos y consejos para perfeccionar tus habilidades de costura.
          </p>
        </div>

        {/* Sección de Tips */}
        <div className={style.tips}>
          <div className={style.tip}>
            <Image
              src="/blog/Tip1.png"
              alt="Margen de costura"
              width={450}
              height={300}
              className={style.tipImage}
            />
            <div className={style.tipContent}>
              <h4>1. Margen de costura</h4>
              <p>Cuando dibujamos patrones, en la mayoría de los casos lo hacemos sin margen de costura, y una vez terminado tenemos que estar agarrando la regla y dibujar todo un contorno con 1 cm o 1,5 cm alrededor para añadirlo. Con este truco, la cosa se hace mucho más fácil y en mucho menos tiempo. Dos lápices unidos por una banda elástica y pasando un lápiz por la línea del patrón, dibujarás directamente la línea del margen de costura de 1 cm. Rápido y eficaz, te lo digo yo que lo uso a diario, o casi.</p>
            </div>
          </div>

          <div className={style.tip}>
            <Image
              src="/blog/Tip2.png"
              alt="Marcar sin Dañar"
              width={450}
              height={300}
              className={style.tipImage}
            />
            <div className={style.tipContent}>
              <h4>2. Cinta carrocero (cinta papel, cinta de enmascarar)</h4>
              <p>Se terminaron esos momentos de subidón de tensión y ganas de mandar todo a la miércoles cuando tengas que coser una tela complicada.

Con este truco, no habrá tela resbalosa, finita o mañosa que te dé pelea.

Poné un poco de cinta de enmascarar en la base de tu prensatelas. ¡Es una maravilla, te lo aseguro!</p>
            </div>
          </div>

          <div className={style.tip}>
            <Image
              src="/blog/Tip3.png"
              alt="Afilado de Agujas"
              width={450}
              height={300}
              className={style.tipImage}
            />
            <div className={style.tipContent}>
              <h4>3. Papel Aluminio</h4>
              <p>
              Tus tijeras para cortar tela ya tienen más años que Matusalén; capaz que necesitan un buen afilado.

Si no tenés un afilador cerca, agarrá un poco de papel de aluminio, doblalo varias veces sobre sí mismo y hacé cortes largos con las tijeras.

Vas a ver cómo se ponen a cortar mucho mejor.
              </p>
            </div>
          </div>

          <div className={style.tip}>
            <Image
              src="/blog/Tip4.png"
              alt="Costuras Rectas"
              width={450}
              height={300}
              className={style.tipImage}
            />
            <div className={style.tipContent}>
              <h4>4. Un ojal</h4>
              <p>¿Cuántas veces agarraste un descosedor y, mientras abrías un ojal, te pasaste de fuerza y lo terminaste rompiendo? Lo que sería un desastre en toda regla.

Para que no te vuelva a pasar, poné un alfiler o aguja al final del ojal; te va a hacer de tope e impedir que lo abras de más.</p>
            </div>
          </div>

          <div className={style.tip}>
            <Image
              src="/blog/Tip5.png"
              alt="Finalización Perfecta"
              width={450}
              height={300}
              className={style.tipImage}
            />
            <div className={style.tipContent}>
              <h4>5. Goma Elástica </h4>
              <p>La tela se te mueve mientras cosés, y te cuesta seguir la línea guía de tu máquina para mantener el margen de costura.

No te preocupes: agarrá una banda elástica, rodeá el brazo de la máquina y ponela a la distancia del margen de costura. Así te va a hacer de tope y te va a ayudar a no perderte. </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;

