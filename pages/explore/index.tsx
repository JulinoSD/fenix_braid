import React from 'react'
import Head from 'next/head'
import { Explorer } from "./explorer"
import { FiArrowRight } from 'react-icons/fi'

const Explore = () => {
  return (
    <>
      <Head>
        <title>Braid</title>
      </Head>
      <Explorer>
        <button type="button">Penteado<FiArrowRight/></button>
        <button type="button">tranças<FiArrowRight/></button>
      </Explorer>
    </>
  )
}
export default Explore
