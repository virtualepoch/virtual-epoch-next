"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";

export const ResumeBtnCard = ({ styles }) => {
  const [resumeOpen, setResumeOpen] = useState();
  const [downloadPrompt, setDownloadPrompt] = useState();

  return (
    <>
      <button className={styles.btnResume} onClick={() => setResumeOpen(true)}>
        Résumé
      </button>
      <CSSTransition
        in={resumeOpen}
        unmountOnExit
        timeout={400}
        classNames="resume-card"
      >
        <div className={`${styles.resumeCard} resume-card`}>
          <button
            className={styles.btnResumeDownload}
            onClick={() => setDownloadPrompt(!downloadPrompt)}
          />

          <button
            className={styles.btnCloseResume}
            onClick={() => setResumeOpen(false)}
          />

          <CSSTransition
            in={downloadPrompt}
            unmountOnExit
            timeout={400}
            classNames="download-prompt"
          >
            <div className={`${styles.downloadPrompt} metal-card`}>
              <button
                className={styles.btnClosePrompt}
                onClick={() => setDownloadPrompt(!downloadPrompt)}
              />
              <p>Press the button below to download PDF.</p>
              <Link
                className={styles.btnDownloadPdf}
                href="/craig-kaufman-resume-2024.pdf"
                target="_blank"
                rel="noreferrer"
                download
                onClick={() => setDownloadPrompt(!downloadPrompt)}
              >
                DOWNLOAD
              </Link>
            </div>
          </CSSTransition>

          <Image
            className={styles.resumePng}
            src="/images/craig-kaufman-resume-2024.png"
            alt="Craig Kaufman's resume"
            width={1545}
            height={2000}
          />
        </div>
      </CSSTransition>
    </>
  );
};
