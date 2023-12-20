"use client"
import React, { Fragment, useState } from "react";
import Image from 'next/image'
import './page.css'
import header from 'next/image'
import Header from './components/header'
import 'bootstrap/dist/css/bootstrap.css'
import Banner from "./components/banner";


export default function Home() {

  const [openNav, setOpenNav] = useState(false);

  const handleNav = () => {
    setOpenNav(!openNav);
  };


  return (
    <>
    <Header />
    <Banner />
    </>
  )
}
