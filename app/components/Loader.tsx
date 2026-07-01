"use client";

import { useEffect, useState } from "react";

/**
 * Page preloader — reproduces the original `#loader` overlay + js/loader.js
 * behavior: a full-screen white overlay with the brand symbol that fades out
 * shortly after the page loads. jQuery-free; runs once when the app mounts.
 */
export default function Loader() {
  const [faded, setFaded] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    const fade = setTimeout(() => setFaded(true), 200);
    const remove = setTimeout(() => setRemoved(true), 250);
    return () => {
      clearTimeout(fade);
      clearTimeout(remove);
    };
  }, []);

  if (removed) return null;

  return (
    <div id="loader" className="loader" style={{ opacity: faded ? 0 : 1 }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/msjnew-logo -symbol.JPG"
        alt="Brand Logo"
        className="brand-logo"
      />
    </div>
  );
}
