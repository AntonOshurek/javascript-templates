"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
//LIBS
import Cookies from "js-cookie";
//STYLES
import style from "./cookie-notification.module.css";

export default function CookieNotification(): JSX.Element | null {
  const [isConsentGiven, setIsConsentGiven] = useState(true);

  useEffect(() => {
    const consent = Cookies.get("cookie_consent");

    if (consent !== "true") {
      setIsConsentGiven(false);
    }
  }, []);

  const handleAccept = () => {
    Cookies.set("cookie_consent", "true", { expires: 365 });
    setIsConsentGiven(true);
  };

  if (isConsentGiven) {
    return null;
  }

  return (
    <>
      {!isConsentGiven && (
        <div className={style["cookie-notification"]}>
          <Image
            src="./cookie-icon.svg"
            alt="cooie icon"
            width={40}
            height={40}
          />

          <p className={style["cookie-notification__info"]}>
            We use cookies solely to ensure the proper functioning of the
            website. We do not collect or process any personal data. By
            continuing to use the site, you agree to our use of technical
            cookies.
          </p>

          <button
            className={`${style["cookie-notification__button"]} ${style["cookie-notification__button--accept"]}`}
            type="button"
            onClick={handleAccept}
          >
            Accept
          </button>
        </div>
      )}
    </>
  );
}
