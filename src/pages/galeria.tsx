import { FiHeart } from "react-icons/fi"
import { Images } from "styles/images"

export const Galery =() => {
  return (
    <Images>
        <header className="Header">
          <span className="foto">
            <p>imagem</p>
          </span>
          <span className="preferences">
            <span>
              <FiHeart size={20}/>
              <p>001</p>
            </span>
            <span>
              <FiHeart size={20}/>
              <p>001</p>
            </span>
          </span>
        </header>
        <main className="principal">
          <section className="card">
            <article className="photo">
            <img src="#" alt="imagem"/>
            </article>
            <p>Nome</p>
          </section>
        </main>
    </Images>
  )
}
export default Galery
