import type { NextPage } from 'next'
import { Layout } from '../components/layout'
import {Landing} from '../../styles/landing'
import Head from 'next/head'
import {FiHome} from 'react-icons/fi'

const Home: NextPage = () => {
  return <Layout main = {
    <div>
      <Head>
        <title>Braid</title>
      </Head>
      <Landing>
        <article className='invite'>
          <FiHome size={25}/>

        </article>
      </Landing>
    </div>
    }
  />
}

export default Home
