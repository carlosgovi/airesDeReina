import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <section className={styles.footer_container}>
      <div className={styles.footer_content_one}>
        <div className={styles.footer_section_one}>
          <div className={`${styles.footer_contact_container} sm:text-sm`}>
            <h4 style={{ fontWeight: "bold", textAlign: "center" }}>
              CONTACTANOS
            </h4>
            <div className={styles.footer_contact_text_container}>
              <div>
                <Image src="/home.svg" alt="mail" width={30} height={30} />
              </div>
              Anchorena 889PA,Rosario,Santa Fe,
              <br /> Argentina CP 2000
            </div>
            <div className={styles.footer_contact_text_container}>
              <div>
                <Image
                  src="/smartphone.svg"
                  alt="mail"
                  width={30}
                  height={30}
                />
              </div>
              +54 34 13 371377
            </div>
            <div className={styles.footer_contact_text_container}>
              <div
                style={{ display: "flex", flexDirection: "row", gap: "5px" }}
              >
                <Image src="/email.svg" alt="mail" width={30} height={30} />
                veronicadangelo804@gmail.com
              </div>
            </div>
          </div>
          <div className={styles.footer_nav_container}>
            <h4 style={{ fontWeight: "bold" }}>AIRES DE REINA</h4>
            <ul className={styles.footer_nav_list}>
              <li>INICIO</li>
              <li>CURSOS</li>
              <li>INDUMENTARIA</li>
              <li>BLOG</li>
              <li>NOSOTROS</li>
            </ul>
          </div>
        </div>
        <div className={styles.footer_section_two}>
          <h4 style={{ fontWeight: "bold" }}>METODOS DE PAGO</h4>
          <div className={styles.footer_payment_container}>
            <Image src="/visa.svg" alt="visa" width={40} height={40} />
            <Image
              src="/mastercard.svg"
              alt="mastercard"
              width={40}
              height={40}
            />
            <Image
              src="/mercadopago.svg"
              alt="mercado pago"
              width={40}
              height={40}
            />
          </div>
          <div
            style={{ width: "100%", height: "1px", backgroundColor: "#C7B876" }}
          ></div>
          <div>
            <h4 style={{ fontWeight: "bold" }}>VISITANOS</h4>
            <h5>Anchorena 889PA,Rosario</h5>
          </div>
        </div>
      </div>
      <div className={styles.footer_content_two}>
        <div
          style={{ width: "90%", height: "1px", backgroundColor: "#C7B876" }}
        ></div>
        <div className={styles.footer_content_two_text}>
          <div>© 2023 Powered by carlosgovi. All Rights Reserved</div>
          <div className={styles.footer_social_media_container}>
            <Link href="https://www.facebook.com/veronica.dangelo.92798/">
              <Image
                src="/logoFacebook.svg"
                alt="logo"
                width={40}
                height={40}
              />
            </Link>
            <Link href="https://www.instagram.com/airesdereinaaltacostura/">
              <Image
                src="/logoInstagram.svg"
                alt="logo"
                width={40}
                height={40}
              />
            </Link>
            <Link href="https://api.whatsapp.com/send/?phone=543413371377&text=Hola%20me%20gustaría%20saber%20más&app_absent=0">
              <Image
                src="/logoWhatsapp.svg"
                alt="logo"
                width={40}
                height={40}
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
