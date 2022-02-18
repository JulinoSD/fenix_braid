import type { NextPage } from 'next'
import { Layout } from '../components/layout'
import {Landing} from '../../styles/landing'
import Head from 'next/head'
import {FiHome} from 'react-icons/fi'
import {FaCalendar, FaImages} from 'react-icons/fa'

const Home: NextPage = () => {
  return <Layout main = {
    <div>
      <Head>
        <title>Braid</title>
      </Head>
      <Landing>
        <article className='invite'>
          <ul>
            <li><FaImages/></li>
            <li><FiHome/></li>
            <li><FaCalendar/></li>
          </ul>
        </article>
      </Landing>
    </div>
    }
  />
}

export default Home
