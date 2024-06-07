import React from "react";
import styles from "./header.module.css";
import Image from "next/image";
import Link from "next/link";

import { Dropdown, DropdownItem } from "flowbite-react";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";

const Header = () => {
  return (
    <header>
      <Navbar fluid rounded className={styles.nav}>
        <NavbarBrand as={Link} href="/">
          <Image
            style={{
              width: 100,
              height: 90,
              margin: "10px",
              filter: "drop-shadow( 3px 3px 2px #00000076 )",
            }}
            src="/logo.png"
            alt="Aires de Reina Logo"
            width={100}
            height={90}
            priority
          />
          <span
            className={`${styles.text_index} self-center whitespace-nowrap text-lg text-white lg:text-3xl font-semibold dark:text-white`}
          >
            Aires de Reina
          </span>
        </NavbarBrand>
        <NavbarToggle />
        <NavbarCollapse className={styles.navbarCollapse}>
          <NavbarLink className={styles.link} as={Link} href="/">
            INICIO
          </NavbarLink>
          <NavbarLink className={styles.link}>
            <Dropdown label="CURSOS" inline>
              <DropdownItem>
                <Link href={"/cursos/altacostura"}>Alta Costura</Link>
              </DropdownItem>

              <DropdownItem>
                {" "}
                <Link href={"/cursos/lenceria"}>Lenceria</Link>
              </DropdownItem>
              <DropdownItem>
                {" "}
                <Link href={"/cursos/bustier"}>Bustier</Link>
              </DropdownItem>
              <DropdownItem>
                {" "}
                <Link href={"/cursos/bordado"}>Bordado</Link>
              </DropdownItem>
              <DropdownItem>
                {" "}
                <Link href={"/cursos/corseteria"}>Corseteria</Link>
              </DropdownItem>
              <DropdownItem>
                {" "}
                <Link href={"/cursos/tallerdepantalon"}>Pantalon</Link>
              </DropdownItem>
              <DropdownItem>
                {" "}
                <Link href={"/cursos/tallerdeblazer"}>Blazer</Link>
              </DropdownItem>
              <DropdownItem>
                {" "}
                <Link href={"/cursos/costurabasica"}>Costura Basica</Link>
              </DropdownItem>
              <DropdownItem
                style={{
                  backgroundColor: "#c1b26f", //hover
                  color: "white",
                  border: "none",
                  fontWeight: "bold",
                  borderRadius: "5px",
                }}
              >
                <Link href={"/cursos"}>Ver TODOS</Link>
              </DropdownItem>
            </Dropdown>
          </NavbarLink>

          <NavbarLink className={styles.link} as={Link} href="/indumentaria">
            INDUMENTARIA
          </NavbarLink>
          <NavbarLink className={styles.link} as={Link} href="/blog">
            BLOG
          </NavbarLink>
          <NavbarLink className={styles.link} as={Link} href="/nosotros">
            NOSOTROS
          </NavbarLink>
          <div className={styles.logoContainer}>
            <div className={styles.logo_redes}>
              <Link
                href={
                  "https://api.whatsapp.com/send/?phone=543413371377&text=Hola%20me%20gustaría%20saber%20más&app_absent=0"
                }
              >
                <Image
                  width={40}
                  height={40}
                  src="/logoWhatsapp.svg"
                  alt="Aires de Reina Logo"
                  priority
                ></Image>
              </Link>
            </div>
            <div className={styles.logo_redes}>
              <Link href={"https://www.instagram.com/airesdereinaaltacostura/"}>
                <Image
                  width={40}
                  height={40}
                  src="/logoInstagram.svg"
                  alt="Aires de Reina Logo"
                  priority
                ></Image>
              </Link>
            </div>
            <div className={styles.logo_redes}>
              <Link href={"https://www.facebook.com/veronica.dangelo.92798/"}>
                <Image
                  width={40}
                  height={40}
                  src="/logoFacebook.svg"
                  alt="Aires de Reina Logo"
                  priority
                ></Image>
              </Link>
            </div>
          </div>
        </NavbarCollapse>
      </Navbar>
    </header>
  );
};

export { Header };
