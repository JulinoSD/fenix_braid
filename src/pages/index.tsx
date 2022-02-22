import type { NextPage } from 'next'
import Head from 'next/head'
import {FaCalendar, FaImages} from 'react-icons/fa'
import {FiHome} from 'react-icons/fi'
import { Layout } from '../components/layout'
import {Landing} from '../../styles/landing'

const Home: NextPage = () => {
  return <Layout main = {
    <div>
      <Head>
        <title>Braid</title>
      </Head>
      <Landing>
      {/* <img src={fundo} alt="" /> */}
        <article className='invite'>
          <ul>
            <li><FaImages size={20}/></li>
            <li><FiHome size={20}/></li>
            <li><FaCalendar size={20}/></li>
          </ul>
        </article>
      </Landing>
    </div>
    }
  />
}

export default Home
