import { Teste } from "styles/teste"

function handleButton(){
  const Btn = document.querySelector(".btn");
  return Btn
  console.log(Btn);
}

export const Test = () => {
  return(
    <div>
      <Teste>
        <div onClick={handleButton} className="btn">
          TESTE
        </div>
        <div className="profile-card">
          <div className="info">
            <h2>Julino SD</h2>
            <p>CEO/Founder</p>
          </div>
        </div>
      </Teste>
    </div>
  )

}
export default Test
