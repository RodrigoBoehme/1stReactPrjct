//Tela inicial
//Usa varios componente (aqui faremos a composição )
import Card from "./components/ui/Card"
import Header from "./components/ui/Header"
import CardV2 from "./components/ui/CardV2"
import "./App.css"

import img1 from "./assets/hero.png"
import img2 from "./assets/R.jpg"
import img3 from "./assets/DWM.jpeg"

function App({onNavigation}){
  return(
    <section className="page">
      <Header 
      title="A"
      subtitle="Exemplo simples com componentização"
      />
      <div className="App">
        <h1>Meus Cards</h1>
        <CardV2
        imagem={img3}
        alt=""
        titulo="Ab12"
        descricao="jdlnalksdnçasmd mkaçldnlka nlkdnalkd nklansdk an lkadknsald alksndlk  klaklnjlngi"
        textoBotao="clique em mim"
        />

        <CardV2
        imagem={img1}
        alt="asda"
        titulo="CD34"
        descricao="Lorem ipsumljnldkansld"
        textoBotao="abrabrabra"
        />

        <CardV2
        imagem={img2}
        alt="avbfnka"
        titulo="abravra"
        descricao="djlajj jlksdnjabiu oieoiano bvvnd cnmdoij brijnqonsof ojneoqnosndsaomf ojneqojwnn nndalkno nofjna jonfofjnsjf jdkals"
        textoBotao="Abra"
        />
      </div>
    </section>
  )
}
export default App