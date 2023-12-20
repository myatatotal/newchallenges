"use client";
import Image from "next/image";
import { useEffect } from "react";
import Link from "next/link";

export default function Header() {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.js");
  }, []);
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand" href="/">
            <Image
              src="/logo.svg"
              width={450}
              height={66}
              alt="Picture of the author"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav leftnav">
              <li className="nav-item px-2">
                <Link className="nav-link active" aria-current="page" href="/">
                  About Us
                </Link>
              </li>
              <li className="nav-item px-2">
                <Link className="nav-link text-bold" href="/">
                  Services
                </Link>
              </li>
              <li className="nav-item px-2">
                <Link className="nav-link text-bold" href="/">
                  Resources
                </Link>
              </li>
              <li className="nav-item px-2">
                <Link className="nav-link text-bold" href="/">
                  Giving Back
                </Link>
              </li>
              <li className="nav-item px-2">
                <Link className="nav-link text-bold" href="/">
                  Locations
                </Link>
              </li>
              <li className="nav-item px-2">
                <Link className="nav-link text-bold" href="/">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
