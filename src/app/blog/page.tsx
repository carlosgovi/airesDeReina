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
              <p>Cuando dibujamos patrones, en la mayoría de los casos lo hacemos sin margen de costura, y una vez acabado tenemos que estar cogiendo la regla y dibujar todo un contorno con 1 cm o 1,5 cm a su alrededor para añadirlo.

                Con este truco la cosa se hace mucho más fácil y en mucho menos tiempo.

                Dos lápices unidos por una goma elástica y pasando un lápiz por la línea del patrón dibujarás directamente la línea del margen de costura de 1 cm. Rápido y eficaz, te lo digo yo que lo uso a diario, o casi.</p>
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
              <h4>2. Cinta carrocero (cinta papel)</h4>
              <p>Se acabaron esos momentos de subidas de tensión, y ganas de mandarlo todo a tomar por saco, cuando cosas una tela difícil.

                Con este truco no habrá tela resbaladiza, fina o caprichosa que se te resista.

                Pon un poco de cinta de carrocero en la base de tu prensatelas, es mano de santo, te lo aseguro. </p>
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
                Tus tijeras de cortar tela tienen ya más años que la tos, quizás necesiten un afilado.

                Si te pilla a desmano el llevarlas a un afilador de los de toda la vida, coge una poco de papel de aluminio, dóblalo varias veces sobre si mismo, y haz cortes longitudinales con tu tijera.

                Verás que se animarán a cortar mejor.
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
              <p>
                Cuantas veces has cogido un descosedor y, mientras abrías un ojal, te has pasado de fuerza y te lo has cargado. Lo que se llama liarla parda en toda regla.

                Para que esto no os vuelva a pasar pon un alfiler al final del ojal, te hará de tope e impedirá que abras el ojal más de la cuenta.
              </p>
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
              <p>Se te mueve la tela mientras las coses, y te cuesta seguir la línea guía de tú máquina de coser para mantener el margen de costura.

                Pues no pasa nada, coge una goma elástica rodea el brazo de tu máquina y ponla a la distancia de costura (margen de costura), hará de tope y evitará que te despistes. </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;

