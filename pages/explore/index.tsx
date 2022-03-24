import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Explorer } from "../../styles/explorer"
import { FiArrowRight } from 'react-icons/fi'
import { IoIosArrowForward } from 'react-icons/io'

const Explore = () => {
  return (
    <>
      <Head>
        <title>Braid</title>
      </Head>
      <Explorer>
        <button type="button">
          <Link href="../hairstyle">
            <a>
              <p>Penteado</p> <IoIosArrowForward/>
            </a>
          </Link>
        </button>
        <button type="button">
          <Link href="../braids">
            <a>
              <p>tranças</p> <IoIosArrowForward/>
            </a>
          </Link>
        </button>
      </Explorer>
    </>
  )
}
export default Explore
