"use client";
import React, { useRef, useEffect } from "react";
import { ThreePyramid } from "./three-pyramid";
import styles from "./page.module.css";

export default function About() {
  const textBox1 = useRef(null);
  const textBox2 = useRef(null);
  const textBox3 = useRef(null);
  const textBox4 = useRef(null);
  const textBox5 = useRef(null);
  const textBox6 = useRef(null);

  useEffect(() => {
    const phrase1 = "Pixel-perfection";
    const phrase2 = "Responsive layouts";
    const phrase3 = "Daily real-time updates";
    const phrase4 = "Single-Page applications coded with ReactJS";
    const phrase5 = "Webpages coded with HTML, CSS, and JavaScript";
    const phrase6 = "Code that passes all W3C Validations";
    let i = 0;
    let j = 0;
    let k = 0;
    let l = 0;
    let m = 0;
    let n = 0;
    let text1 = [];
    let text2 = [];
    let text3 = [];
    let text4 = [];
    let text5 = [];
    let text6 = [];
    // ///////////////////////////////////////////////////////////////////
    function typePhrase1() {
      if (i < phrase1.length) {
        text1.push(phrase1[i]);
        i++;
      }
      textBox1.current.innerHTML = text1.join("");
      setTimeout(typePhrase1, 50);
    }
    typePhrase1();

    // ///////////////////////////////////////////////////////////////
    function typePhrase2() {
      if (j < phrase2.length) {
        text2.push(phrase2[j]);
        j++;
      }
      textBox2.current.innerHTML = text2.join("");
      setTimeout(typePhrase2, 50);
    }
    setTimeout(function () {
      typePhrase2();
    }, 1000);

    // ///////////////////////////////////////////////
    function typePhrase3() {
      if (k < phrase3.length) {
        text3.push(phrase3[k]);
        k++;
      }
      textBox3.current.innerHTML = text3.join("");
      setTimeout(typePhrase3, 50);
    }
    setTimeout(function () {
      typePhrase3();
    }, 2000);

    // //////////////////////////////////////////////
    function typePhrase4() {
      if (l < phrase4.length) {
        text4.push(phrase4[l]);
        l++;
      }
      textBox4.current.innerHTML = text4.join("");
      setTimeout(typePhrase4, 50);
    }
    setTimeout(function () {
      typePhrase4();
    }, 3100);

    // ///////////////////////////////////////////////
    function typePhrase5() {
      if (m < phrase5.length) {
        text5.push(phrase5[m]);
        m++;
      }
      textBox5.current.innerHTML = text5.join("");
      setTimeout(typePhrase5, 50);
    }
    setTimeout(function () {
      typePhrase5();
    }, 4600);

    // ///////////////////////////////////
    function typePhrase6() {
      if (n < phrase6.length) {
        text6.push(phrase6[n]);
        n++;
      }
      textBox6.current.innerHTML = text6.join("");
      setTimeout(typePhrase6, 50);
    }
    setTimeout(function () {
      typePhrase6();
    }, 6700);
  }, []);

  return (
    <main>
      <h1 className="section-heading">What We Do</h1>
      <div className={styles.content}>
        <p className={styles.statement}>
          We strive to exceed client expectations and visions by providing:
        </p>

        <p className={styles.text} ref={textBox1}></p>
        <p className={styles.text} ref={textBox2}></p>
        <p className={styles.text} ref={textBox3}></p>
        <p className={styles.text} ref={textBox4}></p>
        <p className={styles.text} ref={textBox5}></p>
        <p className={styles.text} ref={textBox6}></p>

        <p className={styles.statement}>
          We guarantee everything we do. We never conclude any project until all
          the requirements of that project are fully completed. We are not happy
          until our clients&apos; needs are fulfilled.
        </p>

        <p className={styles.statement}>
          If you&apos;d like to inquire into our services please press the
          &apos;Contact&apos; link on the next page. Thanks for the visit!
        </p>
      </div>

      <ThreePyramid />
    </main>
  );
}
