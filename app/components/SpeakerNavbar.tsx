"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

/**
 * Reduced navbar used on the speaker bio pages (and reused for team pages).
 * Matches the original bio markup: `navbar-transparent`, only five links
 * (no Workshops/Opportunities). Collapse handled with React state, no jQuery.
 */
const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/speakers", label: "Speakers" },
  { href: "https://medium.com/@journeythescience", label: "Blogs", external: true },
  { href: "/contact", label: "Contact Us" },
];

export default function SpeakerNavbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-transparent">
      <div className="container-fluid">
        <Link className="navbar-brand" href="/">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/msjnew-logo.JPG" alt="Brand logo" height={100} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          aria-controls="navbarSupportedContent"
          aria-expanded={open}
          aria-label="Toggle navigation"
          onClick={() => setOpen((o) => !o)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
      <div
        className={`collapse navbar-collapse nav-links${open ? " show" : ""}`}
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          {links.map((l) => {
            const active = !l.external && isActive(l.href);
            const cls = `nav-link page-loader${active ? " active" : ""}`;
            return (
              <li className="nav-item" key={l.href}>
                {l.external ? (
                  <a
                    className={cls}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </a>
                ) : (
                  <Link
                    className={cls}
                    href={l.href}
                    aria-current={active ? "page" : undefined}
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
