import styled from "styled-components";

export const Teste = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 100vh;

.btn {
  border: 2px solid #764abc;
  border-radius: 25px;
  color: #764abc;
  padding: 10px 20px;
  transition: all 1s;
  position: relative;
  overflow: hidden;
}
/*puting some extra element (it appear in other level), then animate it*/
.btn::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #764abc;
  transition: all 1s;
  z-index: -1;
  transform: translate(-100%);
}

.btn:hover::before {
  transform: translateX(0);
}
.btn:hover {
  color: #fff;
}
.profile-card {
  width: 300px;
  height: 400px;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  display: grid;
  place-items: center;
  background: #cb997e;
  position: relative;
  transition: all 1s;
  z-index: 1;
  overflow: hidden;
}
.info::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #764abc;
  transform: skew(30deg) translateX(100%);
  opacity: 0.3;
  z-index: -1;
  transition: all 0.6s ease;
}
.info::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #764abc;
  transform: skew(-30deg) translateX(90%);
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.7);
  opacity: 0.3;
  z-index: -1;
  transition: all 0.6s ease;
}
.profile-card:hover .info::before {
  transform: skew(30deg) translateX(50%);
}
.profile-card:hover .info::after {
  transform: skew(-30deg) translateX(40%);
  opacity: 0.7;
}
.profile-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #764abc;
  opacity: 0.3;
  transform: skew(30deg) translateX(85%);
  transition: all 0.6s ease;
  z-index: 1;
}
.profile-card::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #764abc;
  opacity: 0.3;
  transform: skew(-30deg) translateX(85%);
  transition: all 0.6s ease;
  z-index: -1;
}
.profile-card:hover:before {
  transform: skew(30deg) translateX(30%);
}
.profile-card:hover:after {
  transform: skew(-30deg) translateX(20%);
}
.info h2, .info p {
  color: #fff;
  opacity: 0;
  transition: all 0.6s;
}

.profile-card:hover .info h2,
.profile-card:hover .info p {
  opacity: 1;
}
`
export default Teste;
