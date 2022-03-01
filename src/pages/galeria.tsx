import Image from 'next/image'
import { FiHeart } from "react-icons/fi"
import { Images } from "styles/images"

export const Galery =() => {
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
                <p className="title">Gostaram</p>
              </section>
              <section className="number">
                <p className="name">001</p>
                <p className="title">Fizeram</p>
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
              <Image src='/../public/fundo.png' alt="imagem" width={430} height={420}
              />
            </article>
            <article className="reaction">
              <p>Nome:</p>
              <p>Tipo:</p>
              <FiHeart size={20}/>
            </article>
          </section>
          <section className="card">
            <article className="photo">
            <img src="#" alt="imagem"/>
            </article>
            <article className="reaction">
              <p>Nome:</p>
              <p>Tipo:</p>
              <FiHeart size={20}/>
            </article>
          </section>
        </main>
    </Images>
  )
}
export default Galery
