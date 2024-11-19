"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Cookies from "js-cookie";
//STYLES
import style from "./cookie-notification.module.css";

export default function CookieNotification(): JSX.Element | null {
  const [isConsentGiven, setIsConsentGiven] = useState(true);

  useEffect(() => {
    const consent = Cookies.get("cookie_consent");
    if (consent === "true") {
      setIsConsentGiven(true);
    } else {
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
            We use cookies to personalize your site experience and analyze the
            site traffic.
          </p>

          <div className={style["cookie-notification__controls"]}>
            <button
              className={style["cookie-notification__button"]}
              type="button"
            >
              Decline
            </button>
            <button
              className={`${style["cookie-notification__button"]} ${style["cookie-notification__button--accept"]}`}
              type="button"
              onClick={handleAccept}
            >
              Accept
            </button>
          </div>
        </div>
      )}
    </>
  );
}
