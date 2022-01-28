import type { NextPage } from 'next'
import { Layout } from '../components/layout'
import {Landing} from '../../styles/landing'

const Home: NextPage = () => {
  return <Layout main = {
    <div>
        <img src="../../../public/images/fundo" alt="" />
      <Landing>
        <article className='invite'>
          <h1>Fenix Braid</h1>
          <p>Bem vindo ao seu canto de beleza preferêncial, onde podes se expressar e ser feliz </p>

        <button className='btnInfo'>
          info
        </button>

        </article>
      </Landing>
    </div>
    }
  />
}

export default Home
