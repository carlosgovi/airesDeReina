import React from "react";
import { Carousel } from "flowbite-react";
import styles from "./slider.module.css";
import Image from "next/image";
const Slider = (props: { logo: string }) => {
  return (
    <div
      /* className="h-56 sm:h-64 xl:h-80 2xl:h-96" */
      style={{
        height: "100vh",
      }}
    >
      <Carousel leftControl={" "} rightControl={" "} slideInterval={3000}>
        <div
          className={`${styles.slider_one} flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white `}
        >
          <Image
            className={styles.image_slider}
            width={500}
            height={500}
            src={
              props.logo == "indumentaria"
                ? "/logoIndumentaria.png"
                : "/logoCursos.png"
            }
            alt="Aires de Reina Logo"
            priority
          ></Image>
        </div>
        <div
          className={`${styles.slider_two} flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white `}
        >
          <Image
            className={styles.image_slider}
            width={500}
            height={500}
            src={
              props.logo == "indumentaria"
                ? "/logoIndumentaria.png"
                : "/logoCursos.png"
            }
            alt="Aires de Reina Logo"
            priority
          ></Image>
        </div>
        <div
          className={`${styles.slider_three} flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white `}
        >
          <Image
            className={styles.image_slider}
            width={500}
            height={500}
            src={
              props.logo == "indumentaria"
                ? "/logoIndumentaria.png"
                : "/logoCursos.png"
            }
            alt="Aires de Reina Logo"
            priority
          ></Image>
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
