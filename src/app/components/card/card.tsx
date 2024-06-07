import React from "react";
import styles from "./card.module.css";
import Image from "next/image";
import { Libre_Baskerville } from "next/font/google";
import Link from "next/link";

const libreBaskerville = Libre_Baskerville({
  weight: "400",
  subsets: ["latin"],
});

interface Props {
  srcImg: string;
  title: string;
  description: [string];
  durationData: string;
}
const Card = (props: Props) => {
  return (
    <div className={`${styles.card} card`}>
      <div
        style={{
          backgroundImage: `url(${props.srcImg})`,
        }}
        className={styles.card_image}
      ></div>
      <div className={styles.card_text}>
        <h3
          className={`${styles.card_title} ${libreBaskerville.className} p-2  text-xl`}
        >
          {props.title}
        </h3>

        <ul>
          {props?.description.map((description: string, index: any) => (
            <li key={index} className={`${styles.card_description} text-sm`}>
              {description}
            </li>
          ))}
        </ul>

        <div className={styles.card_container_footer}>
          <div className={styles.card_certificate}>
            <span className={`${styles.card_duration_data} text-xs`}>
              {props.durationData}
            </span>
            <div className={`${styles.card_certificate_text} text-base`}>
              CERTIFICATE
            </div>
          </div>
          <div className={styles.card_button_container}>
            <Image
              className={styles.card_crown}
              width={40}
              height={40}
              src="/machine.png"
              alt="Aires de Reina Logo"
            ></Image>
            <Link
              href={`/cursos/${props.title
                .toLocaleLowerCase()
                .trim()
                .replace(/\s+/g, "")}`}
            >
              <button className={styles.card_button}>Ver más</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
