import { FaHeart, FaShareAlt } from "react-icons/fa"
import { IoIosArrowDown } from "react-icons/io"
import { BraidStyle } from "styles/braidStyle"

const Braid = () => {
  return (
    <BraidStyle>
      <main className="page">
          <section className="card">
            <article className="photo">
              <img src="/../trança0.jpeg" alt="trança 0" />
            </article>
            <article className="cardAction">
              <h2>Nome da trança</h2>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam inventore aspernatur beatae, nesciunt...?</p>
              <section className='description'>
                <article className='buttonAction'>
                  <button>angendar</button>
                  <FaHeart size={20}/>
                </article>
              </section>
            </article>
          </section>
          <section className="card">
            <article className="photo">
              <img src="/../trança6.jpeg" alt="trança 6"/>
            </article>
            <article className="cardAction">
              <h2>Nome da trança</h2>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam inventore aspernatur beatae, nesciunt...?</p>
              <section className='description'>
                <article className='buttonAction'>
                  <button>angendar</button>
                  <FaHeart size={20}/>
                </article>
              </section>
            </article>
          </section>
        </main>
    </BraidStyle>
  )
}
export default Braid
