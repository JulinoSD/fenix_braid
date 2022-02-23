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
              <p>Jumbo</p>
              <p>Tipo</p>
            </section>
            <section className="number">
              <p>001</p>
              <p>Gostaram</p>
            </section>
            <section className="number">
              <p>001</p>
              <p>Fizeram</p>
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
