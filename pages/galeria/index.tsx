import { FaHeart, FaShareAlt } from 'react-icons/fa'
import { FiHeart } from 'react-icons/fi';
import {IoIosArrowDown} from 'react-icons/io'
import { Images } from "../../styles/images"

const Galery =() => {
  return (
    <Images>
        <header className="Header">
          <span className="foto">
            <p></p>
          </span>
          <section className="preferences">
            <article className="references">
              <section className="number">
                <p className="name">Jumbo</p>
                <p className="title">Tipo</p>
              </section>
              <section className="number">
                <p className="name">001</p>
                <p className="title">Gostei</p>
              </section>
              <section className="number">
                <p className="name">001</p>
                <p className="title">Fiz</p>
              </section>
            </article>
            <button className="detail">
              detalhes
            </button>
          </section>
        </header>
        <main className="principal">
          <section className="card">
            <article className="photo">
              <img src="/../fundo.png" alt="foto de fundo" />
            </article>
            <article className="cardAction">
              <section className='description'>
                <article className='buttonAction'>
                  <FaHeart size={20}/>
                  <FaShareAlt size={20}/>
                </article>

                <button><IoIosArrowDown size={20} color="gray"/> </button>
              </section>
            </article>
          </section>
          <section className="card">
            <article className="photo">
              <img src="/../trança6.jpeg" alt="trança 6"/>
            </article>
            <article className="cardAction">
            <section className='description'>
                <article className='buttonAction'>
                  <FaHeart size={20}/>
                  <FaShareAlt size={20}/>
                </article>

                <button><IoIosArrowDown size={20} color="gray"/> </button>
              </section>
            </article>
          </section>
        </main>
    </Images>
  )
}
export default Galery
