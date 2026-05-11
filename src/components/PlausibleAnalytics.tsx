"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

const STORAGE_KEY = "grow_cookie_consent";

function hasConsent(): boolean {
  try {
    return localStorage.getItem(STORAGE_KEY) === "accepted";
  } catch {
    return false;
  }
}

export function PlausibleAnalytics() {
  const [consented, setConsented] = useState(false);

  useEffect(() => {
    if (hasConsent()) {
      setConsented(true);
      return;
    }

    function onConsent() {
      setConsented(true);
    }

    window.addEventListener("grow:cookie-accepted", onConsent);
    return () => window.removeEventListener("grow:cookie-accepted", onConsent);
  }, []);

  if (!consented) return null;

  return (
    <Script
      src="https://plausible.io/js/script.js"
      data-domain="grow.contact"
      strategy="afterInteractive"
    />
  );
}
