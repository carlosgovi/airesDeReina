import React from "react";
import styles from "./cardCourse.module.css";
import Image from "next/image";
import Link from "next/link";
import { Libre_Baskerville } from "next/font/google";

const libreBaskerville = Libre_Baskerville({
  weight: "400",
  subsets: ["latin"],
});
const CardCourse = ({
  title,
  text,
  clases,
  horas,
  tipe,
}: {
  title: string;
  text: string;
  clases: number;
  horas: number;
  tipe?: string;
}) => {
  return (
    <div
      className={styles.card}
      style={
        tipe == "indumentary" ? { marginTop: "275px" } : { marginTop: "0px" }
      }
    >
      <div
        style={{
          width: "100%",
          height: "1px",
          backgroundColor: "#C7B876",
          marginTop: "20px",
        }}
      ></div>
      <h2
        className={`${styles.card_title} ${libreBaskerville.className} p-2  text-2xl`}
      >
        {title}
      </h2>
      <p className={`${styles.card_description} text-xl `}>{text}</p>
      <div
        className={styles.card_container_footer}
        style={
          tipe == "indumentary"
            ? { justifyContent: "center" }
            : { justifyContent: "space-between" }
        }
      >
        {tipe !== "indumentary" ? (
          <div className={styles.card_certificate}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "5px",
                padding: "10px",
              }}
            >
              <span className={`${styles.card_duration_data} text-xs`}>
                {clases} clases personalizadas.
              </span>

              <span className={`${styles.card_duration_data} text-xs`}>
                {horas}Hs. semanales.
              </span>

              <span className={`${styles.card_duration_data} text-xs`}>
                Apuntes en papel y digital.
              </span>
            </div>
            <div className={`${styles.card_certificate_text} text-base`}>
              CERTIFICATE
            </div>
          </div>
        ) : null}
        <div className={styles.card_button_container}>
          <Image
            className={styles.card_crown}
            width={50}
            height={50}
            src={tipe == "indumentary" ? "/crown.png" : "/machine.png"}
            alt="Aires de Reina Logo"
          ></Image>
          <Link
            href={`https://api.whatsapp.com/send/?phone=543413371377&text=Hola%20me%20gustari%CC%81a%20saber%20ma%CC%81s&app_absent=0`}
          >
            <button className={styles.card_button}>CONSULTANOS</button>
            <Image
              className={styles.card_logo_watsapp}
              src="/logoWhatsapp.svg"
              alt="mensaje watsapp"
              width={50}
              height={50}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardCourse;
