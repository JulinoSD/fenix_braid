import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'
import { Layout } from '../src/components/layout'

const Home: NextPage = () => {
  return <Layout main = {
    <div>
      <p>
        dia com horários disponíveis essa semana
      </p>
      <div>
        <div>
          <img src="#" alt="imagem de fundo 1" />
          <p>terça</p>
        </div>
        <div>
          <img src="#" alt="imagem de fundo 2" />
          <p>quarta</p>
        </div>
        <div>
          <img src="#" alt="imagem de fundo 3" />
          <p>quinta</p>
        </div>
      </div>
    <button>
      veja
    </button>
    </div>
    }
  />
}

export default Home
