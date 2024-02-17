"use client";
import React, { useRef, useEffect, useState } from "react";
import { ThreePyramid } from "./three-pyramid";
import styles from "./page.module.css";

export default function About() {
  const textBox1 = useRef(null),
    textBox2 = useRef(null),
    textBox3 = useRef(null),
    textBox4 = useRef(null),
    textBox5 = useRef(null),
    textBox6 = useRef(null),
    [cursor1, setCursor1] = useState(true),
    [cursor2, setCursor2] = useState(false),
    [cursor3, setCursor3] = useState(false),
    [cursor4, setCursor4] = useState(false),
    [cursor5, setCursor5] = useState(false),
    [cursor6, setCursor6] = useState(false);

  useEffect(() => {
    const typeSpeed = 50,
      phrase1 = "Pixel-perfection",
      phrase1Timeout = phrase1.length * typeSpeed,
      phrase2 = "Responsive layouts",
      phrase2Timeout = phrase2.length * typeSpeed + phrase1Timeout,
      phrase3 = "Daily real-time updates",
      phrase3Timeout = phrase3.length * typeSpeed + phrase2Timeout,
      phrase4 = "Single-Page applications coded with ReactJS",
      phrase4Timeout = phrase4.length * typeSpeed + phrase3Timeout,
      phrase5 = "Webpages coded with HTML, CSS, and JavaScript",
      phrase5Timeout = phrase5.length * typeSpeed + phrase4Timeout,
      phrase6 = "Code that passes all W3C Validations";
    let i = 0,
      j = 0,
      k = 0,
      l = 0,
      m = 0,
      n = 0,
      text1 = [],
      text2 = [],
      text3 = [],
      text4 = [],
      text5 = [],
      text6 = [];

    // ///////////////////////////////////////////////////////////////////
    function typePhrase1() {
      if (i < phrase1.length) {
        text1.push(phrase1[i]);
        i++;
      }
      textBox1.current.innerHTML = text1.join("");
      setTimeout(typePhrase1, typeSpeed);
    }
    typePhrase1();

    // ///////////////////////////////////////////////////////////////
    function typePhrase2() {
      if (j < phrase2.length) {
        text2.push(phrase2[j]);
        j++;
      }
      textBox2.current.innerHTML = text2.join("");
      setTimeout(typePhrase2, typeSpeed);
    }
    setTimeout(function () {
      setCursor1(false);
      setCursor2(true);
      typePhrase2();
    }, phrase1Timeout);

    // ///////////////////////////////////////////////
    function typePhrase3() {
      if (k < phrase3.length) {
        text3.push(phrase3[k]);
        k++;
      }
      textBox3.current.innerHTML = text3.join("");
      setTimeout(typePhrase3, typeSpeed);
    }
    setTimeout(function () {
      setCursor2(false);
      setCursor3(true);
      typePhrase3();
    }, phrase2Timeout);

    // //////////////////////////////////////////////
    function typePhrase4() {
      if (l < phrase4.length) {
        text4.push(phrase4[l]);
        l++;
      }
      textBox4.current.innerHTML = text4.join("");
      setTimeout(typePhrase4, typeSpeed);
    }
    setTimeout(function () {
      setCursor3(false);
      setCursor4(true);
      typePhrase4();
    }, phrase3Timeout);

    // ///////////////////////////////////////////////
    function typePhrase5() {
      if (m < phrase5.length) {
        text5.push(phrase5[m]);
        m++;
      }
      textBox5.current.innerHTML = text5.join("");
      setTimeout(typePhrase5, typeSpeed);
    }
    setTimeout(function () {
      setCursor4(false);
      setCursor5(true);
      typePhrase5();
    }, phrase4Timeout);

    // ///////////////////////////////////
    function typePhrase6() {
      if (n < phrase6.length) {
        text6.push(phrase6[n]);
        n++;
      }
      textBox6.current.innerHTML = text6.join("");
      setTimeout(typePhrase6, typeSpeed);
    }
    setTimeout(function () {
      setCursor5(false);
      setCursor6(true);
      typePhrase6();
    }, phrase5Timeout);
  }, []);

  return (
    <main>
      <h1 className="section-heading">What We Do</h1>
      <div className={styles.content}>
        <p className={styles.statement}>
          We strive to exceed client expectations and visions by providing:
        </p>

        <p
          className={
            !cursor1
              ? `${styles.text} ${styles.removeCursor}`
              : `${styles.text}`
          }
          ref={textBox1}
        ></p>
        <p
          className={
            !cursor2
              ? `${styles.text} ${styles.removeCursor}`
              : `${styles.text}`
          }
          ref={textBox2}
        ></p>
        <p
          className={
            !cursor3
              ? `${styles.text} ${styles.removeCursor}`
              : `${styles.text}`
          }
          ref={textBox3}
        ></p>
        <p
          className={
            !cursor4
              ? `${styles.text} ${styles.removeCursor}`
              : `${styles.text}`
          }
          ref={textBox4}
        ></p>
        <p
          className={
            !cursor5
              ? `${styles.text} ${styles.removeCursor}`
              : `${styles.text}`
          }
          ref={textBox5}
        ></p>
        <p
          className={
            !cursor6
              ? `${styles.text} ${styles.removeCursor}`
              : `${styles.text}`
          }
          ref={textBox6}
        ></p>

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
