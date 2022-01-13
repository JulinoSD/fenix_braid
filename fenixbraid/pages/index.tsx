import type { NextPage } from 'next'
import Link from 'next/link'
import { Layout } from '../src/components/layout'
import {Landing} from '../styles/landing'

const Home: NextPage = () => {
  return <Layout main = {
    <div>
      <Landing>
        <article className='invite'>
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
