import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import {
  FaCalendar,
  FaImages,
  FaRegCompass
} from 'react-icons/fa';
import {AiOutlineHome} from 'react-icons/ai';
import { Layout } from '../src/components/layout';
import {Landing} from '../styles/landing';

const Home: NextPage = () => {
  return <Layout main = {
    <div>
      <Head>
        <title>Braid</title>
      </Head>
      <Landing>
      {/* <img src={fundo} alt="" /> */}
        <main className='invite'>
          <ul className='navigation'>
            <li className='navigationLink'>
              <FaImages size={20}/>
              <Link href='/galeria'>
              <a>galeria</a>
              </Link>
            </li>
            {/* <li><FaHome size={20}/></li> */}
            <li className='navigationLink'><AiOutlineHome size={20}/>
            <Link href='/'>
              <a>home</a>
              </Link>
            </li>
            <li className='navigationLink'><FaCalendar size={18}/>
            <Link href='#'>
              <a>agenda</a>
              </Link>
            </li>
            <li className='navigationLink'><FaRegCompass size={20}/>
            <Link href='/explore'>
              <a>explorar</a>
              </Link>
            </li>
          </ul>
        </main>
      </Landing>
    </div>
    }
  />
}

export default Home
